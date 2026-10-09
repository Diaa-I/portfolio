# Theta
# Recon & Scanning
# Making a custom user
![[Pasted image 20260816170717.png]]
![[Pasted image 20260816170918.png]]
![[Pasted image 20260816170948.png]]
# Finding the IP of the victim machine
![[Pasted image 20260816171122.png]]
## Running a default nmap scan
![[Pasted image 20260816171238.png]]
Found that port 80 is on.
## Running a scan to find all ports
![[Pasted image 20260816171835.png]]
Found an additional port 3042
## Running a scan to find the versions of the services
![[Pasted image 20260816172024.png]]
Found the versions.
# Visiting the webstie
![[Pasted image 20260816172357.png]]
Very informative only a square in the middle, that means something is hidden lets use dirb or gobuster.
### Running dirbuster 
![[Pasted image 20260816172701.png]]
(The azure and my connection made the image blurry). So I first attempted it but I misspelt it and the second try its running.
![[Pasted image 20260816172803.png]]
uploads, wp, secure, and login are caching my eye. Uploads im thinking some sort of upload attack, login some sort of injection. Secure some sort of authorization failure. WP some sort of old version that is vulnerable. Basically it looks like there's a lot to uncover and this is just the surface. There is also a development wonder if that has something in it. Also Login im thinking maybe some sort of input we can have like search or comment that we can attempt an injection on and built it to be a upload vulnerability.
### lets visit while we also let gobuster do more of its magic on the web pages
PS: I know we can have it traverse everything on its own, without me inputting anything, but I prefer doing some on my own and at the end incase I miss something ill do a traverse thing.
![[Pasted image 20260816173151.png]]
This seems interesting maybe some sort of local file inclusion or something.
### Secure
![[Pasted image 20260816173243.png]]
Secure nothing.
### Login
![[Pasted image 20260816173425.png]]
Nothing as well
### Uploads
![[Pasted image 20260816173455.png]]
Testing this requires I try to upload something.
### Development
![[Pasted image 20260816173550.png]]![[Pasted image 20260816173606.png]]
I found the file upload page thats nice. This web page did peak my interest because of its name. Usually development could lead to something that a normal user should not have access to.
We can play with this later, for now lets continue scanning.
### WP
![[Pasted image 20260816173735.png]]
![[Pasted image 20260816173753.png]]
HAHAHA no way.
# Exploitation & Gaining Access & Maintaining access
# Research what Journee is and Attempt an SQLInjection on the login page
![[Pasted image 20260816174703.png]]
A further scan shows that this port is running ssh. 
![[Pasted image 20260816174818.png]]
![[Pasted image 20260816174900.png]]
Searching for exploits yields some results.
![[Pasted image 20260816175032.png]]
Lets try to find the username.
![[Pasted image 20260816175114.png]]
I was trying to see how this exploit works or what parameters are needed, i guess i have to visit exploit-db.
![[Pasted image 20260816175218.png]]
There is a sample code below, lets try that.
![[Pasted image 20260816175534.png]]
No text was found so I entered the exploit into an AI (gemini) to check how to exploit it.
![[Pasted image 20260816175816.png]]
Seems like theres a problem with the code indentation, good that i know python lets try to fix it.
![[Pasted image 20260816180016.png]]
Both passes were fixed, I think the second one was more of the issue, but just in case.
![[Pasted image 20260816180053.png]]
More syntax problems, lets remove the 3.
![[Pasted image 20260816180127.png]]
More fun to fix, lets install the package
![[Pasted image 20260816180340.png]]
Bunch of failed installs :).
![[Pasted image 20260816180459.png]]
I give up lets use msfconsole.
![[Pasted image 20260816180527.png]]
Another failure wohoo.
![[Pasted image 20260816180557.png]]
Lets come back to this later.
# Back to login page
![[Pasted image 20260816180704.png]]
Lets try to run this on burpsuite an give it a group of username and password to test.
![[Pasted image 20260816180843.png]]
I have to do manual labor :(.
![[Pasted image 20260816181035.png]]
Thank you for this i have to manual insert this :(.
![[Pasted image 20260816181100.png]]
Now this exists.
![[Pasted image 20260816181119.png]]
For some reason my kali page, its not becoming a bigger size but Ill fix that later insha'allah. 
![[Pasted image 20260816181236.png]]
Lets add the list.
![[Pasted image 20260816181329.png]]
Changed to this before, because the other just does one one. This does all the possibilities.
![[Pasted image 20260816181431.png]]
While doing the upload of the list I saw sqlmap and remembered i could also do that. Let pause this and go to sqlmap
## Sqlmap
![[Pasted image 20260816181648.png]]
request.txt
![[Pasted image 20260816181759.png]]
Some fun failures.
![[Pasted image 20260816181841.png]]
Lets look at help and pdf of the course.
![[Pasted image 20260816182105.png]]
Nothing useful.
![[Pasted image 20260816182234.png]]
Nothing still
![[Pasted image 20260816182329.png]]
Yeah nope, lets try to go back to the burpsuite.
![[Pasted image 20260816182617.png]]
Lets use the metasploit username list.
![[Pasted image 20260816182708.png]]
Lets unzip rockyou.txt, let try this.
![[Pasted image 20260816182747.png]]
There are those maybe I should also try this first cause they are probably shorter.
![[Pasted image 20260816182844.png]]
Lets let this one run and try something in upload.
# Trying to upload
![[Pasted image 20260816183117.png]]
Upload a normal file to see that where the files get uploaded.
![[Pasted image 20260816183248 1.png]]
So i can use this in gobuster, okay i cant upload things from diaanasr username lets do it in kali.
![[Pasted image 20260816183406.png]]
Fixed it, now lets upload.
![[Pasted image 20260816183427.png]]
Okay it informs us where it has been uploaded.
![[Pasted image 20260816183926.png]]
Okay that works lets try something php related or something.
![[Pasted image 20260816184150.png]]
![[Pasted image 20260816184142.png]]
Make a hello world php file and store it directly in /home/kali.
![[Pasted image 20260816184240.png]]
By expiremental, they mean anything goes???.
![[Pasted image 20260816184302.png]]
Okay.
![[Pasted image 20260816184358.png]]
Great friend.
![[Pasted image 20260816184704.png]]
PHP reverse shell, mistake i wrote the victim's ip.
![[Pasted image 20260816184831.png]]
Fixed it.
![[Pasted image 20260816184854.png]]
lets try before that Ill run a listener.
![[Pasted image 20260816184923.png]]
Listener is listening.
![[Pasted image 20260816184952.png]]
Maybe something is wrong with the code.
![[Pasted image 20260816185141.png]]
Lets try it this way, before trying another code to test this.
![[Pasted image 20260816185229.png]]
Okay that didn't work, the wrong ip again also just realized.
I want to try to see if thingts are being executed so lets add an echo "hello its working at the end"
![[Pasted image 20260816185426.png]]
Lets try.
![[Pasted image 20260816185505.png]]
Okay something worked but it did cut out
![[Pasted image 20260816185540.png]]
This also happened.
![[Pasted image 20260816185728.png]]
I removed the hello its working, but it is still disconnecting.
![[Pasted image 20260816185859.png]]
I tried the php system from revshell.
![[Pasted image 20260816185950.png]]
Same thing again
![[Pasted image 20260816190121.png]]
lets use the pentestmonkey one from revshell.
![[Pasted image 20260816190212.png]]
Bingo Got access.
![[Pasted image 20260816190315.png]]
That's nice, Let us try to elevate access.
![[Pasted image 20260816191701.png]]
tried to upgrade the shell and ended up terminating the connection lets connect again.
![[Pasted image 20260816191733.png]]
Lets try again.
![[Pasted image 20260816191851.png]]
I tried to check the version of python and if python3 is avaliable and then spawned a bash shell and it was successful.
![[Pasted image 20260816191940.png]]
Someone tried something and messed up.
![[Pasted image 20260816192022.png]]
Lets go again.
![[Pasted image 20260816192133.png]]
Still didn't work lets see where we have permissions.
![[Pasted image 20260816192307.png]]
Keeps failling, lets try something else. I saw that LinEnum.sh is already downloaded on kali so lets get it here.
![[Pasted image 20260816192441.png]]
Lets start a listening in /home/kali to download script to check for vulnerabilities.
![[Pasted image 20260816192629.png]]
So many failures, first is wrong port, second is file name lets see.
![[Pasted image 20260816192849.png]]
More failures.
![[Pasted image 20260816192940.png]]
Lets use the normal kali user.
![[Pasted image 20260816193024.png]]
Okay now it works, i guess it was using the /home/diaanasr instead of /home/kali.
![[Pasted image 20260816193120.png]]
Lets make it executable for www-data and run it and store it in LinEnum.out
![[Pasted image 20260816193157.png]]
Okay lets now host a server here and send it back to kali machine.
![[Pasted image 20260816193236.png]]
Now we have the listener lets go to kali.
![[Pasted image 20260816193334.png]]
First attempt failed cause i was in /home/kali, after going to /home/diaanasr it works, now lets read it and try to see what can be done.
![[Pasted image 20260816193554.png]]
Lets also send the linpeas.sh prior to read so it can run and we can read the other one.
![[Pasted image 20260816193651.png]]
Tried to download it where www-data doesn't have permission until I was able to download it where it has permissions.
![[Pasted image 20260816193740.png]]
Here it is running, lets go back to reading the linenum.out
![[Pasted image 20260816193905.png]]
We have bob and paul which are other users, and we can potentially edit /etc/passwd.
![[Pasted image 20260816193947.png]]
Kernel information could be useful to find other exploits.
![[Pasted image 20260816194023.png]]
Maybe those can be manipulated as seen from the last section.
![[Pasted image 20260816194053.png]]
Something is listening on port 68.
![[Pasted image 20260816194123.png]]
Nvm.
![[Pasted image 20260816194207.png]]
We can't write to sensitive files like passwd or shadow. and we cant read unless we are shadow
![[Pasted image 20260816194258.png]]
Okay theres the location of flag.
![[Pasted image 20260816194343.png]]
Okay so we need to try to get the shadow file as well as the linpeas.out now.
![[Pasted image 20260816194512.png]]
Okay so I jsut realized only certyain people can read the shadow file as well, lets extract the linpeas.out file
![[Pasted image 20260816194607.png]]
Starting a listener.
![[Pasted image 20260816194725.png]]
Okay, now its time to read the linpeas.out
![[Pasted image 20260816194804.png]]
That is what i like to see , the kernel has issues, lets keep looking.
![[Pasted image 20260816194934.png]]
These also have issues.
![[Pasted image 20260816195032.png]]
Dirtycow is also a problem here
![[Pasted image 20260816195047.png]]
This also.
![[Pasted image 20260816195238.png]]
Installing dirtycow
![[Pasted image 20260816195345.png]]
It is also available in searchsploit.
![[Pasted image 20260816195646.png]]
Okay so lets make it executable from the kali machine.
![[Pasted image 20260816195746.png]]
some weird error, but when i ran the code no errors popped up.
![[Pasted image 20260816200144.png]]
Installed it after making a listener in kali (yes i used kali not diaanasr).
![[Pasted image 20260816200211.png]]
Yay, time wasted.
![[Pasted image 20260816200332.png]]
Lets try msfconsole.
![[Pasted image 20260816200401.png]]
Lets try this I saw it in linpeas.out. its local :).
# Trying the techniques learnt in the last section
## Revisiting the linenum.out file
![[Pasted image 20260816201231.png]]
Nothing
![[Pasted image 20260816201623.png]]
Look at both binaries here python3.5 and systemd
![[Pasted image 20260816201738.png]]
Look at sudo and apache2 configs
![[Pasted image 20260816201812.png]]
Suid files
![[Pasted image 20260816201918.png]]
SGID Files
![[Pasted image 20260816202213.png]]
![[Pasted image 20260816202236.png]]
Attempting the wizardry taught in the last section
## /etc/crontab
![[Pasted image 20260816201334.png]]

## Path environment 
# Apache 2.4 attempting to use it to exploit
![[Pasted image 20260816202648.png]]
![[Pasted image 20260816202958.png]]
It downloaded the wrong thinh, if i hover over the download on the exploit-db page it shows another url lets try that one.
![[Pasted image 20260816203114.png]]
Okay theres something.
![[Pasted image 20260816203310.png]]:) didn't work
## GTFOBINS
I tried to look up all the SUIDs in GTFOBins and found nothing.
I gave the list to AI and found an exploit in pkexec.
![[Pasted image 20260817002259.png]]
And after further digging.

![[Pasted image 20260817002526.png]]
Found this on exploit-db, after googling cve number.
![[Pasted image 20260817003259.png]]
I did download it, but then remembered it needs to become an executable so i removed it.
![[Pasted image 20260817003207.png]]
Lets make it an executable and pass it to victim machine.
![[Pasted image 20260817003654.png]]
The thing has three files :). i need to do more work then
![[Pasted image 20260817003738.png]]
First file.
![[Pasted image 20260817003831.png]]
Second file.
![[Pasted image 20260817003931.png]]
Errors my favorite.
![[Pasted image 20260817004923.png]]
This is the vulnerable version.
![[Pasted image 20260817005021.png]]
Found this lets try it.
![[Pasted image 20260817005325.png]]
Installing it manually as a zip.
![[Pasted image 20260817005502.png]]
I switched to kali, and then I copied that file to my home.
![[Pasted image 20260817005615.png]]
Unzip worked after using unzip instead of gzip as this is a zip not gzip.
![[Pasted image 20260817005923.png]]
The script turns out to be executed on victim not kali and the kali doesn't have gcc, so I compiled them here, then will transfer them to victim.
![[Pasted image 20260817010145.png]]
I did get help from ai on what to do because i didn't have gcc on the victim machine.
![[Pasted image 20260817010122.png]]
They were downloaded successfully, lets test.
![[Pasted image 20260817010301.png]]
Another time waste.
![[Pasted image 20260817010427.png]]
Lets try again wohoo.
![[Pasted image 20260817010515.png]]
Trying again.
![[Pasted image 20260817010538.png]]
Another error yay
![[Pasted image 20260817010650.png]]
which is the same as in the github.
![[Pasted image 20260817010708.png]]
Okay lets try this.
![[Pasted image 20260817010836.png]]
Same thing, let me continue what is in the github file just in case.
![[Pasted image 20260817011004.png]]
Nice wizardry that didn't work.
![[Pasted image 20260817011421.png]]
Some wizardry installed.
![[Pasted image 20260817011441.png]]
lets try this.
![[Pasted image 20260817011838.png]]
Did nothing first time lets try to reinstall it.
![[Pasted image 20260817011933.png]]
YEEEESSSS ROOOOOOOOOOT AT LASST.
![[Pasted image 20260817012044.png]]
I am not dreaming (ps it is around 1 am here).
![[Pasted image 20260817012153.png]]
That didn't work, I mean i know where one flag is bob, also I need to download the shadow file and crack it and also upgrade the shell somehow.
![[Pasted image 20260817012301.png]]
Yup thats the flag i know.
![[Pasted image 20260817012327.png]]
![[Pasted image 20260817012355.png]]
THanks for the attempted jumpscare at 1 am.
![[Pasted image 20260817012423.png]]
I guessed theres another flag because of the "This user flag" means another flag could be in the paul and im not wrong and the first find was correct except the ~ instead of / let me run that find 
![[Pasted image 20260817012538.png]]
Yup.
![[Pasted image 20260817012633.png]]
![[Pasted image 20260817012646.png]]
I need to decode the flag ooo
![[Pasted image 20260817013035.png]]
Thats the flag decoded, didn't need to try the other encodings.
![[Pasted image 20260817012858.png]]
I wanted to see what the DoNotRun.py is, HAHAHa nice we are trolling okay.
# Shadow File
![[Pasted image 20260817013549.png]]
Here is the shadow file (ps there is more but i only showed a bit in the image, like bob and paul are down but i did copy them)
![[Pasted image 20260817013524.png]]
Copied the shadow file to the kali machine
![[Pasted image 20260817013732.png]]
Some is lacking sleep, lets go back to the old ctf and see how i did or the slides
![[Pasted image 20260817013942.png]]
Really lacking sleep i see. Let my download them or just use john and do the unshadow
## John
![[Pasted image 20260817014259.png]]
Copied the passwd.
![[Pasted image 20260817014243.png]]
Lets get the passwd.
![[Pasted image 20260817014321.png]]
I did try this before copying passwd as smart, so now lets try using john.
![[Pasted image 20260817014424.png]]
They are dropping in hot, got two passwords.
![[Pasted image 20260817014621.png]]
haha its looks like I need to use my own computer for root.
![[Pasted image 20260817015031.png]]
Copied it to my notepad in windows (how did i copy it you ask, old school letter by letter writting it is almost 2 am no need to think just do at this point).
![[Pasted image 20260817015317.png]]
lets wait now.
![[Pasted image 20260817015815.png]]
NOOOO, this is bringing back memorizes.
![[Pasted image 20260817015932.png]]
Lets try the lists here.
![[Pasted image 20260817020020.png]]
Thats funny the first one finished so quick, lets try this one.
![[Pasted image 20260817020813.png]]Nope 
![[Pasted image 20260817020840.png]]
Thats quick.


