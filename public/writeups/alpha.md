## Scanning
#### Getting the IP Address
![[Pasted image 20260618232736.png]]
ifconfig on the local kali machine will give us the subnet the victim machine is on because the kali machine is on the same network. 
### Scanning the subnet to find the victim machine
![[Pasted image 20260618232810.png]]
Using arp-scan to scan what machines are on this network and online, we found the victim machine with the IP Address 102, the reason it isn't the address ending with 1 it is because we are using vmware and this address is used by it.
### Scanning the victim machine for vulnerabilities
Using nmap --script=vuln 192.168.0.101 to find vulnerabilities that this nmap script can detect.
![[Pasted image 20260618233247 1.png]]
We can see multiple opened ports that can allow us to enter:
- ftp
- ssh
- http
We can potentially find the username and passwords for ftp, ssh, and maybe http depending on what is hosted on this machine.
Additionally this script showed us that this ftp version can be backdoored. It also found a folder called secret that it mentioned could have important data or credentials.
### Other way to find vulnerabilities
Another way to find vulnearbilities is by checking if there are any other ports opened not one of the most common ones (A tip i learned from tryhackme).
![[Pasted image 20260618233822.png]]
It shows the same ports opened.
#### Finding the OS version
![[Pasted image 20260618234307.png]]
We see that this Linux version 3.2 - 4.9, we can attempt to find vulnerabilities that are in these versions or find other ways to try to make this range smaller.
#### Finding the Services' version
![[Pasted image 20260618234648.png]]
A quick search on exploit-db.com will yield us with vulnerabilities that are for these versions, if any existed and were found. As we saw when we used the --script=vuln, we have found this ftp to have been backdoored, but maybe we can also find other vulnerabilities for the other services as well. 
# Gaining Access
## FTP 
As we have found that the FTP version is vulnerable, now check if metasploit has that exploit or check if exploit-db has the exploit code. 
### Metasploit
![[Pasted image 20260618235717.png]]
Launching Metasploit to search for the exploit.
#### Search for Exploit code
![[Pasted image 20260618235742 1.png]]
We have found the exploit
![[Pasted image 20260618235835.png]]
We will use that and check what options need to be set. It only needs the Remote Host to be set as the Remote Port is 21 which is for FTP.
![[Pasted image 20260619000432.png]]
Setting the Remote Host to the IP Address found previously 192.168.0.101 **This is fixed later, as I inputted the wrong address for remote**.
![[Pasted image 20260619000706.png]]
After entering Run, I remembered that I didn't select a payload, the difference between a payload and exploit here is that payload is what runs after the exploit was successful so it was me telling that the exploit worked but nothing was done after.
![[Pasted image 20260619001450.png]]
We want a reverse shell so lets use number 4
![[Pasted image 20260619001549 1.png]]
![[Pasted image 20260619001609.png]]
Another fail, No LHOST so lets set that for the payload
![[Pasted image 20260619001649.png]]
Okay, now lets set the LHost. Here I also doubled checked the addresses, and found that I have replaced the local with remote and vice versa, so I fixed it in the next image.
![[Pasted image 20260619001836.png]]
The addresses are now correct, lets run again.
![[Pasted image 20260619001935.png]]
The exploit was successful and I also found out that this exploit gives us root access.
![[Pasted image 20260619002137.png]]
I wanted to make sure of the ids but forgot the command, so I used Gemini AI with the prompt find the user and group id kali linux to get the command quicker. I also checked the version of the OS ***could be useful for any privilege escalation*** and double checked that we are root with user and group id 0.
##### Flags found
Before ending the night, I decided to quickly look for the flags.
![[Pasted image 20260619002651.png]]
I missed up the find command and is now returning all the files and I waited for it to finish.
Back to manual page of find command.
![[Pasted image 20260619003108.png]]
![[Pasted image 20260619003153.png]]
I entered find / -name flag.txt (Turns out i forgot the -type f), you can see that from the example in the man page so the command must be find / -type f -name flag.txt
###### First Flag
![[Pasted image 20260619003528.png]]
Here I found the first flag.
![[Pasted image 20260619003559.png]]
I then decided to look at all the txt files maybe I can find other flags, but before that I was brainstorming some ways of finding other flags, here is that:
Maybe A way to find all the flags is to write a script or command to look inside the text files and check when it says flag. 
Here is psudeocode 
find / -type f -name \*.txt | search flag inside file
A long one would be 
find / -type f -name \*.txt | echo the file | grep flag
but lets see if there is a quicker way
###### Second Flag
Running find / -type f -name \*.txt 
![[Pasted image 20260619004644.png]]
![[Pasted image 20260619004547.png]]
Yields another FLAG, but this one feels cheap as i was skimming through all the text files that existed but this shows that they maybe have flag and something after or before. so I can try find / -type f -name \*flag\*.txt, but first lets read the second flag.
![[Pasted image 20260619004818.png]]
![[Pasted image 20260619004923.png]]
### Upgrade the shell to a Meterpreter shell
So I was trying to get a Meterpreter shell to make life easier, so I found this article ^[1] That I'll be following.
![[Pasted image 20260619232633.png]]
![[Pasted image 20260619233111.png]]
Successfully got a Meterpreter shell after following the steps available in the article, which are also shown in the picture above. 
### Checking what users exists on the machine + Getting their hashes
#### Meterpreter way
I vividly remember  from TryHackMe that Meterpreter allows you to take the hashes from computers (it'll do it for you), but I don't remember the command or remember if this is true, so for now lets search if that thing exists and move onto the next step for the day.
![[Pasted image 20260619234530.png]]
So i wasted my time, it didn't work, so I decided to proceed with the normal way.
#### Normal way
![[Pasted image 20260619234737.png]]
I also looked at the permissions of this file
![[Pasted image 20260619234813.png]]
Could be useful for moving around this computer, or privilege escalation (but in this case I'm already root).
![[Pasted image 20260619235637.png]]
Here are the passwords, with their usernames. Lets download the hashes and attempt to crack them in the mean time.
![[Pasted image 20260619235909.png]]
help shows us we can download files from the machine using meterpreter
![[Pasted image 20260619235930.png]]
Now we move to cracking the passwords.
We found two users with their hashes, root and hussein.
### First Attempt to the crack the passwords
Ill open a new shell, and attempt to crack the passwords using rockyou.txt and johntheripper, as in the slides.
First lets check if the file was actually downloaded
![[Pasted image 20260620000204.png]]
YEs it was downloaded.
So lets check if rockyou.txt wordlist exists on this machine, it does but it is compressed. A quick AI search to get the syntax of the command to unzip it.
![[Pasted image 20260620000811.png]]
Here it is uncompressed.
Lets try without following everything in the slides
![[Pasted image 20260620001048.png]]
Without the combination of the passwd and shadow, only using shadow file. Because this will take long lets leave it running in the background and follow the slides for password cracking and combine both the passwd and shadow.
First lets download the /etc/shadow file
![[Pasted image 20260620001357.png]]
After downloading lets now unshadow them following the slides. Lets first check that both are downloaded on kali machine.
![[Pasted image 20260620001514.png]]
Okay thats good.
![[Pasted image 20260620001700.png]]
Unshadowed, now to cracking
![[Pasted image 20260620001718.png]]
Oh looks like only one john the ripper instance is allowed. A moment of realization I thought the image shows minutes:second:microseconds after a quick ai check, turns out its 19 hours wait so lets stop that and run the unshadowed.db
![[Pasted image 20260620002130.png]]
Oh turns out its 19 for all it seems this is password if exists in this wordlist is a bit deep in it, so l decided to leave it running and explore other things in the meantime,.
![[Pasted image 20260620024341.png]]
I left it for 2 hours while working on the web hacking, and yeah it don't look like it's in this wordlist. 
### Check the OS System
![[Pasted image 20260619233236.png]]
![[Pasted image 20260619233250.png]]
After a quick look at the help of meterpreter, i used the sysinfo to get information about system as well as the os version could be helpful to find exploitations.
![[Pasted image 20260619002137.png]]
Here is the kernel version and other information regarding os.
![[Pasted image 20260620004659.png]]
A Quick search on Exploit-db yield some results that could be tested to get access into this machine, but I left this for the http and you can find that later in this report.
## HTTP
### Exploring what is hosted on the http port
Knowning that http port is open, lets explore what is hosted on it.
I also have access to the machine so i can view the codes and do some static analysis and check if those codes are vulnerable to famous injections or attacks.
![[Pasted image 20260620004918.png]]
A couple of things to check after this.
#### Use inspect tool (inspector in the case of firefox) to check if there are any clues left by the developer.
Nothing was found and no photos are accompanied for this section.
#### Network Tab
Here as well standard get, no clues or extra information. It's using HTTP/1.1
#### Using Gobuster to find webpages
### Check if there are any other pages using gobuster. 
gobuster isn't installed so lets install it
![[Pasted image 20260620005243.png]]
![[Pasted image 20260620005530.png]]
Here is the command and its results, so let's explore.
![[Pasted image 20260620005738.png]]
OOO. a few things that can be pointed out, the ability to search (SQL injection, Command injection and other injection capabilities)
![[Pasted image 20260620005825.png]]
A login capability.
***NOTE: I didn't expect the pages very well and missed out that it is using hussein.local for webpage, which is causing rendering issues and other issues you will see as we go for a little bit till i saw that hussein.local was used instead of an ip address, so I added it to my /etc/hosts file.***
A quick search about the pages that come after secret using gobuster.
![[Pasted image 20260620010422.png]]
Okay an admin page and wp-content maybe we can upload our own malicious file and open it, another backdoor opportunity. Also those pages can have subpages so ill also run gobuster on them as this blog slowness hurts
![[Pasted image 20260620010712.png]]
For wp-admin
![[Pasted image 20260620010740.png]]
For wp-content
![[Pasted image 20260620010811.png]]
for wp-includes.
![[Pasted image 20260620010912.png]]
Back to the main page and attempting to do a simple SQL injection.
![[Pasted image 20260620011104.png]]
Here is the problem I talked about the note above.
![[Pasted image 20260620011137.png|416]]
More ways to potentially inflect pain on the visitors of this website, a potential Client side attacks can be implemented.
![[Pasted image 20260620011709.png]]
Here I noticed the problem and fixed it by adding the IP address to /etc/hosts
![[Pasted image 20260620011800.png]]
I first tried doing it without sudo, but this file requires sudo to edit it.
![[Pasted image 20260620011752.png]]
Here is the IP being added so the DNS can figure out what bakri.local routes to.
![[Pasted image 20260620011917.png]]
Okay it works after testing.
#### Attempting Injection attacks
![[Pasted image 20260620011959.png]]
I attempted an SQL Injection and that failed on the search.
Maybe lets test the admin or login page for this vulnerability.
![[Pasted image 20260620012127.png]]![[Pasted image 20260620012134.png]]
Okay so this is the wordpress login page.
Lets go to the comments
![[Pasted image 20260620012456.png]]
Basically what im trying to see is if the code in the backend, takes the input and doesn't sanitze it and so it allows this js code to run, and what this code does it shows an image but the image doesn't exist and so it goes to the onerror line which tells it to do a js alert which can tell us this website is vulnerable to xss injection
![[Pasted image 20260620012507.png]]
A fail, lets try adding text to them
![[Pasted image 20260620012735.png]]
So lets try this add a bit of text
![[Pasted image 20260620012753.png]]
Didn't work, lets try again. 
![[Pasted image 20260620012813.png]]
Hopefully this is fine
![[Pasted image 20260620012828.png]]
Nope, let's try again.
![[Pasted image 20260620012906.png]]
Lets try this
![[Pasted image 20260620012940.png]]
It worked? but my comments isn't visible. One of two either the whole thing got deleted or it is there but because the code didnt run its hidden or the admin needs to approve the comment.
It says one reply to the blog article removing the possibility its there but hidden.
![[Pasted image 20260620013221.png]]
Lets try a normal reply.
![[Pasted image 20260620013304.png]]
Still not there hmm.
![[Pasted image 20260620013404.png]]
The cookies shown might need to be looked at further.
#### Bypassing the Admin login page
After trying two injection attacks and failing, I was frustrated and attempted to manually brute force the admin login page, so I tried admin for both username and password and was successful.  
![[Pasted image 20260620013713.png]]
![[Pasted image 20260620013748.png]]
Turns out One of my guesses was correct yes, the admin needs to approve the comments, lets see if we approved the first(second in the photo) that contains the xss injection what happens.
![[Pasted image 20260620013900.png]]
No alert, but I mean im in the admin page no need to do any injection im already here.
An idea I thought about is to upload a file containing a backdoor that then keeps us in the machine even if they were to change the password. Let try that.
### Privilege Escalation after uploading backdoor
The steps to getting the backdoor is present in the [[#Maintaining access]] section under HTTP.
After uploading the backdoor that can be found in the maintaining access section of this report, I saw that I'm logged in as www-data and tried to become root again.
![[Pasted image 20260621122051.png]]
![[Pasted image 20260621121942.png]]
Check the Kernel Version (I have done in one of the previous days but here im not root so i do need it to escalate my privileges )
![[Pasted image 20260621121933.png]]
Okay, there are two exploits for our Linux version lets test the 'PTRACE_TRACEME' pkexec Local Privilege Escalation one first.
![[Pasted image 20260621122418.png]]
Here is it downloaded.
![[Pasted image 20260621122450.png]]
Before running it, this is a local Privilege escalation meaning i need to transfer this exploit code to the victim machine and run it there, so lets do that.
![[Pasted image 20260621122836.png]]
I have opened an http server so that i can download the file from my backdoor installed on the victim machine.
![[Pasted image 20260621123023.png]]
Before wasting my time and after I checked the slides, I made sure that gcc the complier for c is downloaded on the victim machine as this is c code, and I found out that it is there.
![[Pasted image 20260621123310.png]]
Wrong file name, lets try again.
![[Pasted image 20260621123403.png]]
![[Pasted image 20260621123506.png]]
I thought it was succesful lets look into it.
![[Pasted image 20260621123732.png]]
Ookay, so I was in a file I don't have permission in, so I thought i try to go to home directory and see from ther but it also failed, lets try to see where i can run sudo from (using the slides).
![[Pasted image 20260621123918.png]]
Okay that didn't work lets try something else.
![[Pasted image 20260621124308.png]]
A quick check to determine where the user im logged in as (www-data) has permissions using AI.
![[Pasted image 20260621124458.png]]
Okay so I can't do that in /var/www, let try going to the html folder that I have permissions in.
![[Pasted image 20260621124533.png]]
Okay it worked in the html folder.
![[Pasted image 20260621124625.png]]
Now lets change the permissions on this file so i can execute it.
![[Pasted image 20260621124857.png]]
Okay so that didn't work. Lets try the other script.
![[Pasted image 20260621125023.png]]
Instead of downloading it from my own kali machine, this time i just downloaded it from the website directly on victim machine.
![[Pasted image 20260621125307.png]]
:))) more issues to enjoy. it didn't download it as c file. lets go back to the easier way that worked.
![[Pasted image 20260621125633.png]]
Back to the old way of installing it from my kali
![[Pasted image 20260621125808.png]]
installed.
![[Pasted image 20260621125849.png]]
Gave it execution permissions.
![[Pasted image 20260621130015.png]]
:) all that and it don't even work.
![[Pasted image 20260621130114.png]]
AI great tool sometimes, let see.
![[Pasted image 20260621130129.png]]
OO okay
![[Pasted image 20260621130310.png]]
The thing is stuck.  
![[Pasted image 20260621130413.png]]
Wow it crashed the whole thing. I give up on the Linux kernel lets try the service hosting the http stuff apache2 or whatever is on this machine.
![[Pasted image 20260618234648.png]]
It looks like apache httpd 2.4.18, a quick visit to exploit-db.
![[Pasted image 20260621131651.png]]
Might be fruitful, lets see. Also its upgrade this shell.
![[Pasted image 20260621132104.png]]
Upgraded my shell into a better one.
![[Pasted image 20260621132216.png]]
Explains a lot, I did read in the ai that I need an upgraded shell that's why i couldn't do sudo stuff.
![[Pasted image 20260621132542.png]]
Lets try again, nope unsuccessful. Back to checking the slides for privilege escalation.
![[Pasted image 20260621132739.png]]
Lets see if exploit-db has anything on these. (I noticed a diverge, I didn't run that code cause it said i need to wait for apache to restart)
![[Pasted image 20260621132839.png]]
and www-data doesn't have that ability, now i can use the backdoor in ftp to bypass this but for now lets try the harder track and assume we don't have a backdoor there.
![[Pasted image 20260621133027.png]]
Lets see this one, but before the AI told me I should try the race condition multiple times.
![[Pasted image 20260621133127.png]]
### I decided to reattempt the LPE
![[Pasted image 20260621133357.png]]
![[Pasted image 20260621133429.png]]
![[Pasted image 20260621135033.png]]
Back to where I was, (PS a tab makes life easier)
![[Pasted image 20260621135139.png]]
I thought i was just scammed until I asked the AI why this is happening allgedly this is what its supposed to do 
![[Pasted image 20260621135255.png]]
Hopefully this works, lets leave it for a bit as recommend by the ai.
![[Pasted image 20260621140247.png]]
That a fair bit waited.
![[Pasted image 20260621140222.png]]
Turns out im blind. (MISSION FAiled), on to the next.
### Attempt OS Kernel < 4.13 privilege escalation
![[Pasted image 20260621140549.png]]
![[Pasted image 20260621140723.png]]
Used the wrong operator to allow for the file to be executed, it should be &&.
![[Pasted image 20260621140839.png]]
Here it is.
![[Pasted image 20260621140907.png]]
Lets follow usage, but i have different file name so lets do based on my file names.
![[Pasted image 20260621141021.png]]
#### Gained root 
![[Pasted image 20260621141107.png]]
But its a dumb shell, this shell is so dumb i can't even backspace so i guess i have to do everything one shot no mistake at least for launching a bash shell using python.
![[Pasted image 20260621141346.png]]
First try failed
![[Pasted image 20260621141416.png]]
Second fail missed the button
![[Pasted image 20260621141457.png]]
Third time it worked. Okay so My work is kinda done here as I have root (The flags I already found).
![[Pasted image 20260621141616.png]]
wait lets do the sudo -l, while im root
![[Pasted image 20260621141654.png]]
That is showing me as root, not very useful. Lets google if i can do this from here as a different user. also Can i switch to user "Hussein" or does it need password.
#### First question (can i run sudo -l for another user)
![[Pasted image 20260621141847.png]]
Lets try it.
![[Pasted image 20260621141941.png]]
Same result, so he can also root.
#### Second question Can i switch to user "Hussein" or does it need password
![[Pasted image 20260621142022.png]]
![[Pasted image 20260621142048.png]]
### Reattempting to crack the password + looking for clues
#### Hashcat Locally
The idea of running it locally was brought to me by my teammate Rashad (Shoutout to him for that idea).
After running hashcat on azure and it taking so long, ill attempt it again on my machine.
![[Pasted image 20260621220148.png]]
Im following ai's guide on how to use the gpu for hashcat on windows 
![[Pasted image 20260621220727.png]]
PS: IT says rockyou.txt (the first one is a directory or a folder because i downloaded as a zip file )
The options is this command are:
- id 1: to use my first gpu which is shown up
- -m 1800: the kernel we are running 
- -a 0: wordlist attack. 
- -w 3: high performance profile, speeds up the process
![[Pasted image 20260621220700.png]]
![[Pasted image 20260621221202.png]]
The estimated time compared to Azure, OO should've thought of that before. Thanks to Rashad for this idea again.
![[Pasted image 20260621221823.png]]
OO okay didnt work, Let try asking Ai for some of the most famous wordlists to test.
![[Pasted image 20260621221909.png]]
It gave us this lets try it.
![[Pasted image 20260621221936.png]]
![[Pasted image 20260621222005.png]]
That's depressing it only took 10 seconds hahaha. Lets use the same github repo and look for some of them.
![[Pasted image 20260621222128.png]]
Lets try this one, looks promissing a lot of passwords (100k)
![[Pasted image 20260621222214.png]]
![[Pasted image 20260621222249.png]]
Even sadder. Lets keep trying others
![[Pasted image 20260621222435.png]]
Before that let me change the directory name from rockyou.txt to wordlists
![[Pasted image 20260621222806.png]]
![[Pasted image 20260621222712.png]]
Not fruitful
![[Pasted image 20260621223206.png]]
![[Pasted image 20260621223230.png]]
![[Pasted image 20260621223215.png]]
Not fruitful.
![[Pasted image 20260621231551.png]]
My Teammate Rashad suggested I try with rules (it'll produce different variations of the password)
![[Pasted image 20260621231919.png|692]]
Failed for the 100k
![[Pasted image 20260621232013.png]]
![[Pasted image 20260621232053.png]]
![[Pasted image 20260621232025.png]]
As this is an old machine Ithought let's try something old, but that didn't work. 
![[Pasted image 20260621232127.png]]
As we are arabs and the professor is too, maybe this.
![[Pasted image 20260621232156.png]]
![[Pasted image 20260621232208.png]]
Yeah that didn't work too.
![[Pasted image 20260621232337.png]]
Maybe because of that wordpress password, this could be.
![[Pasted image 20260621232433.png]]
![[Pasted image 20260621232448.png]]
:) didn't work
![[Pasted image 20260621232707.png]]
Lets try a different rule
![[Pasted image 20260621232718.png]]
Is this what it feels like to be a failure
![[Pasted image 20260621232743.png]]
Lets try again with a large wordlist, im doing the opposite of that quote by Einstein" Insanity is doing the same thing over and over again and expecting different results", I am going insane.
![[Pasted image 20260621232847.png]]
IT didn't work.
##### Custom wordlist
![[Pasted image 20260621233246.png]]
Lets try a custom wordlist (IM using my own kali linux not azure).
![[Pasted image 20260621233634.png]]
HAHAHA please don't hack me dr, im just trying maybe you did insert a password related to the user hussein (I thought it cause you did teach us custom wordlists)
![[Pasted image 20260621234018.png]]
Lets launch a server so i can download it from the vm.
![[Pasted image 20260621233949.png]]
![[Pasted image 20260621233956.png]]
Downloaded from kali to windows, and i cant find it nice thanks windows ill have to copy and paste. I copied and pasted it. lets continue.
![[Pasted image 20260621234810.png]]
Lets test Without rules. 
![[Pasted image 20260621234821.png]]
Nope .
![[Pasted image 20260621234918.png]]
Lets try with rules
![[Pasted image 20260621234934.png]]
Nope again didnt work. The wordpress password has deceived us
##### Back to normal wordlists
![[Pasted image 20260621235841.png]]
New wordlist alert
![[Pasted image 20260621235924.png]]
![[Pasted image 20260621235907.png]]
That didn't work
![[Pasted image 20260621235952.png]]
Lets try with rules
![[Pasted image 20260622000122.png]]
:) lets try a very long one
##### Before attempting to keep the password cracking until the morning lets test navigating the azure machine to find any clues
So because I didn't close, azure it just logged me out I still have the backdoor
![[Pasted image 20260622001010.png]]
Less work for me I guess that's good
![[Pasted image 20260622001215.png]]
Lets switch back to root
![[Pasted image 20260622001242.png]]
OO thats a problem, lets try to look for this user's password from clues here (IM definitely not lazy to do the whole thing again)
![[Pasted image 20260622001526.png]]
Lets look at all those files, I only put an example I won't show the whole thing because its too many files.


##### An idea has popped up
What if the flags mean something, what if they have clues for the password. Is this a delusional thought maybe but after many fails those come.
![[Pasted image 20260622002422.png]]
I copied them into a txt file on windows. A quick ai to see what type of hash this is and what mode in hashcat
![[Pasted image 20260622002452.png]]
![[Pasted image 20260622002514.png]]
Didn't even take too long.
![[Pasted image 20260622002547.png]]
![[Pasted image 20260622002559.png]]
Delusion might be the right word to describe.
![[Pasted image 20260622002651.png]]
![[Pasted image 20260622002704.png]]
Exhausted a word that will haunt me by the looks of it.
###### Flags Cracked
![[Pasted image 20260622002748.png]]
![[Pasted image 20260622002806 1.png]]
![[Pasted image 20260622002815.png]]
GENIUS GENIUS GENIUS, SHOUTOUT to Rashad for the rules
![[Pasted image 20260622003107.png]]
I tried them manually didn't work lets try them with tools.
![[Pasted image 20260622003150.png]]
Store in textfile 
![[Pasted image 20260622003620.png]]
Lets try
![[Pasted image 20260622003648 1.png]]
and the dream was crashed. Back to looking if any clues exists


##### Back to clues 
I'm back and I just ran the ftp backdoor and did the meterpreter shell as well. I did this because their were a lot I didn't have permissions in user hussein. (and if you rememeber I said i wasn't lazy )
![[Pasted image 20260622004654.png]]
Here's and no its not magic i just followed what I did again in this obsidian.
![[Pasted image 20260622005028.png]]
Back to being a rat and looking at files.
![[Pasted image 20260622005159.png]]
Might be interested I see private-keys, having this is dangerous 
Lets ai what gnupg is. GNU Privacy Guard oo might be interesting
![[Pasted image 20260622005443.png]]
:(, i thought i did something
![[Pasted image 20260622005743.png]]
HMMM, maybe something. 
![[Pasted image 20260622005801.png]]
LEts try it for user hussein
![[Pasted image 20260622005913.png]]
![[Pasted image 20260622005942.png]]
I just tried to input the image of the folder into chatgpt and ask if those are useful and attempted some commands to see if useful and it looks like it is not.
![[Pasted image 20260622011100.png]]
![[Pasted image 20260622011113.png]]
So that was also not fruitfull.
##### Back to file hunt for clues
![[Pasted image 20260622011243.png]]
![[Pasted image 20260622011433.png]]
Whats this hmmm
![[Pasted image 20260622011934.png]]
Okay I might be going crazy (its only 1 am)
![[Pasted image 20260622012208.png]]
Okay lets try and see if the wordlists give us a clue
![[Pasted image 20260622012227.png]]
Lets try
![[Pasted image 20260622013236.png]]
Suggested my teammate Rashad to use sendgb so i can crack them on my machine.
![[Pasted image 20260622013530.png]]
![[Pasted image 20260622013937.png]]
![[Pasted image 20260622014133.png]]
Read for another run
![[Pasted image 20260622014121.png]]
Lets start
![[Pasted image 20260622014437.png]]
Back to exhausted
![[Pasted image 20260622014511.png]]
![[Pasted image 20260622014841.png]]
Another one.
![[Pasted image 20260622014907.png]]
![[Pasted image 20260622015101.png]]
And another one.
![[Pasted image 20260622015528.png]]
![[Pasted image 20260622015504.png]]
Another one
![[Pasted image 20260622015550.png]]
![[Pasted image 20260622015919.png]]
Last one and it failed. Last option
##### Attempting to cracking it by leaving it all night,
![[Pasted image 20260621231412.png]]
Ill try it for rockyou.txt  with best66 rule
![[Pasted image 20260622020026.png]]
See in the morning I guess or noon as it is already 1 am, lets leave it for the night.
![[Pasted image 20260622020311.png]]
:)
![[Pasted image 20260622122227.png]]
Fair to say after 8 hours that it isn't crackable.
### SSH Credentials
Check if ssh doesnt have a password
![[Pasted image 20260620203228.png]]
IT does have a password and generic passwords like no password, password, and password123 didn't work, so we will have to find another way in or for clues in the machine that could lead us to find a password.
## Vulnerability Scanner
First lets get meterpreter and backdoor into the machine
![[Pasted image 20260622125232.png]]
Done, now lets download that file.
![[Pasted image 20260622125404.png]]
I'm using normal shell for this.
![[Pasted image 20260622125429.png]]
Proof of it being downloaded
![[Pasted image 20260622125554.png]]
![[Pasted image 20260622125700.png]]
I have used one of those exploits in the http backdoor to gain root (Privilege escalation)
![[Pasted image 20260622125810.png]]
Are those what I am looking for?
![[Pasted image 20260622125928.png]]
As I said in my todo we can give ourself access or as I asked the professor can I just change the password because I have access.
![[Pasted image 20260622130113.png]]
Could be interesting
![[Pasted image 20260622130204.png]]
Lets save the file so It can be downloaded on the kali to be further examined (thats how it should be)
![[Pasted image 20260622130419.png]]
![[Pasted image 20260622130626.png]]
Should've stuck to what I was taught.
![[Pasted image 20260622130538.png]]
Okay it should be .out, I thought .txt works although in slides its out.
![[Pasted image 20260622130752.png]]
okay mousepad isn't properly reading it . cat reads both correctly, anyhow lets look at the ssh stuff
### SSH
![[Pasted image 20260622125810.png]]
Because we are in using ftp, I won't look further into it now, lets look at the ssh the first four. (I know maybe we can take more things from ftp and potentially be able to find more stuff but lets expand and go for ssh). Let's use AI cause I have no experience in those.
![[Pasted image 20260622131605.png]]
Something like this where it'll always be vulnerable because I have the certificates.
![[Pasted image 20260622131924.png]]
![[Pasted image 20260622132027.png]]
Two different attacks one by generating new keys but this could be loud noise if we are pentesting an actual machine, the first one could be a shout.
![[Pasted image 20260622132252.png]]
Okay lets do as the ai said and not be lazy, let me give the file permssions that it said
![[Pasted image 20260622132325.png]]
Okay nope
![[Pasted image 20260622132431.png]]
Yeah nope.
I mean i also have the sshd_config file and could play with that to let me in, but Im not sure if that is possible. So let's leave ssh

### Back to linpeas.sh
![[Pasted image 20260622125700.png]]
![[Pasted image 20260621140907.png]]
I have already attempted this exploit that I downloaded from exploit-db.


## Looking for clues in Log files
![[Pasted image 20260622133725.png]]
![[Pasted image 20260622133707.png]]
lets start with the oldest one and unzip it.
![[Pasted image 20260622133852.png]]
Sometimes you forget you are in meterpreter and have to use their commands, so lets use shell.
![[Pasted image 20260622134017.png]]
Lets search for keywords 
![[Pasted image 20260622134149.png]]
Shoutout to ai for this.
![[Pasted image 20260622134330.png]]
![[Pasted image 20260622134450.png]]
![[Pasted image 20260622134552.png]]
Nothing leaked here, i mean they are log files at the end idk what I expected.
![[Pasted image 20260622134739.png]]
lets try this.
![[Pasted image 20260622135210.png]]
A deadend.
![[Pasted image 20260622135354.png]]
Lets try apache2
![[Pasted image 20260622135406.png]]
![[Pasted image 20260622135441.png]]
Ill stop cause it doesn't look like anything useful can be found.
![[Pasted image 20260622135534.png]]
mysql, Okay nice this shows my fails, lets see the oldest one.
![[Pasted image 20260622135726.png]]
Some good news is that If this captures the attempts it can be deleted or remove the latest so you cover tracks, but for this CTF we weren't asked to cover our tracks
# Maintaining access
## FTP
For FTP, I wasn't focused on maintaining access, I was focusing more on exploring the machine more, I did brain storm some ideas on how to maintain access and they can be found in the Other Suggestions section. 
## HTTP
I have added the uploaded backdoor in this section, as this backdoor allows me to maintain access into the machine even though it can be also considered as another exploitation. I have also mentioned other ideas to maintain access in the Other Suggestions section.
### Attempting to upload a backdoor
To write the reverse shell code, I got assistance from the reverse shell generator ^[2], this website generates the code needed for shell code, now lets check if we have python and what python version on this machine (PS We can also try php because we know it exists because of the .php at the end of each webpage) .
![[Pasted image 20260620015520.png]]
Okay so it looks like its python2.7
![[Pasted image 20260620015620.png]]
Here is the code, lets make a file and try to upload it in wordpress.
![[Pasted image 20260620015927.png]]
Tried to make the file name not obvious (Sarcasm) .
![[Pasted image 20260620015917.png]]
Here is the code in the file.
![[Pasted image 20260620020020.png]]
Lets now try to upload the file
![[Pasted image 20260620020054.png]]
Here it is the very hidden file
![[Pasted image 20260620020119.png]]
a problem, lets try to hide it inside another file maybe a php file instead of python.
![[Pasted image 20260620020255.png]]
![[Pasted image 20260620020241.png]]
![[Pasted image 20260620020231.png]]
Lets also start the server for the connection at our machine, because i forgot to do that.
![[Pasted image 20260620020358.png]]
Here is our server ready and awaiting connections.
![[Pasted image 20260620020426.png]]
Lets try again.
![[Pasted image 20260620020440.png]]
o, lets try changing the file extension from php to .phtml .
before that lets check if we can remove this setting, as an admin.
![[Pasted image 20260620020603.png]]
Nice to know the email of the admin.
Couldn't find anything lets check the internet.
![[Pasted image 20260620020904.png]]
AI, as i have access to the machine this is something we can do, but for now lets see if there is something while im in admin dashboard.
![[Pasted image 20260620021048.png]]
The very safe ai is suggesting compressing the file (Amazing prompt injection, is this another exploitation ?)
![[Pasted image 20260620021212.png]]
![[Pasted image 20260620021235.png]]
Compressing the file and uploading the compressed file. *Suspense*
![[Pasted image 20260620021301.png]]
It worked, now lets see how to open it. Lets add it to a page.
![[Pasted image 20260620021543.png]]
![[Pasted image 20260620021613.png]]
![[Pasted image 20260620021645.png]]
![[Pasted image 20260620021658.png]]Lets test after updating the page.
![[Pasted image 20260620021723.png]]
I thought it didn't work, but it turns out it is a clickable link.
![[Pasted image 20260620021753.png]]
![[Pasted image 20260620021819.png]]
It install it :), im backdooring my own machine hahaha :), lets try another way with this file.
![[Pasted image 20260620021910.png]]
Hovering over the clickable link, gives us this link lets try to visit it but add the php file inside.
![[Pasted image 20260620022014.png]]
Nope Didn't work.
Quick chat with AI informs me that we can upload it as a plugin. Let's try
![[Pasted image 20260620022206.png]]
![[Pasted image 20260620022220.png]]
![[Pasted image 20260620022316.png]]
Okay lets change the .gz to .zip file.
A quick ai chat to know the syntax to make a zip file instead of .zip
![[Pasted image 20260620022440.png]]
![[Pasted image 20260620022501.png]]
![[Pasted image 20260620022526.png]]
Another fail.
A quick ai chat again, turns out wordpress has requirements for what the file needs to look like inside.
![[Pasted image 20260620022923.png]]
Some changes to the file like wordpress needs, and also the php -r is removed and normal php is written because it is inside a php tag.
![[Pasted image 20260620023036.png]]
Compressing the file again.
![[Pasted image 20260620023102.png]]![[Pasted image 20260620023117.png]]
 Let activate it
![[Pasted image 20260620023151.png]]
 Applying does nothing so its not working maybe we need to change the php code inside. 
 ***Note: I mixed up the address again, and didn't put my machine's IP address, instead I placed the victim's IP address****
![[Pasted image 20260620023557.png]]
Lets try this instead
![[Pasted image 20260620023616.png]]
Lets try again
![[Pasted image 20260620023645.png]]
Remove the old code 
![[Pasted image 20260620023727.png]]
![[Pasted image 20260620023749.png]]
![[Pasted image 20260620023804.png]]
From the error here, I realized that I have inserted the wrong address.
![[Pasted image 20260620023912.png]]
Quick check to reveals the issue, im using the wrong address.
![[Pasted image 20260620023951.png]]
Fixed now.
![[Pasted image 20260620024017.png]]
![[Pasted image 20260620024040.png]]
![[Pasted image 20260620024109.png]]
![[Pasted image 20260620024130.png]]
A successful backdoor into the machine.

# Graphs that summarize the journey
This shows a quick step-by-step solution using bullet points to show how I got access to these machines (it doesn't show any failed attempts).
## FTP
![[Pasted image 20260624182055.png]]

## HTTP
![[Pasted image 20260624182107.png]]
### HTTP Backdoor
![[Pasted image 20260624182118.png]]
![[Pasted image 20260624182148.png]]
# Other Suggestions 
What could have also been done
- Because we are root, we can add another user with root permissions and stay there forever.
- we can also do that for website by making user with root privilege.
- I have a backdoor using the website that gives me access (there is a better way to mask it).
- Changing the passwords of the users.
- We can also act as a middle man for the SSH and wait for connections to be made and forward them through as, but this is not a real machine that has communication.
# Mitigation
- Change the password for the admin wordpress
- Don't allow zip folders to be installed as plugins or inspect them at least.
- Don't allow the user to change their own password unless asked by admin (if in an enterprise)
- Update the ftp cause this version is backdoorable and gets you root directly.
- Update the kernel, this version is exploitable and gets you root.
# References
- 1- https://gitbooks.io 
- 2- https://revshells.com
