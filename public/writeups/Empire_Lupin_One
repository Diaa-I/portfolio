# Machine Link and Description
https://www.vulnhub.com/entry/empire-lupinone,750/
Difficulty: Medium

This box was created to be medium, but it can be hard if you get lost.

CTF like box. You have to enumerate as much as you can.
# IP Addresses

![[Pasted image 20261026192316.png]]
Okay after waiting for the nmap scans to run, i did find that the machine itself tells me what port is it on.
![[Pasted image 20261026192422.png]]
We can see that two ports are open, ssh and http.
![[Pasted image 20261026192502.png]]
Running another scan to make sure that those are the only two ports open. Let us take a look at the http.
![[Pasted image 20261026192607.png]]
Okay so lets run gobuster while we try to manual explore as well maybe the code.
![[Pasted image 20261026192906.png]]
The source code shows us a directory /image, but nothing else.
![[Pasted image 20261026192938.png]]
That is good to note down.
![[Pasted image 20261026192755.png]]
The robots.txt shows us a directory by the name of myfiles maybe that could have a file inclusion vulnearblity. sitemap wasn't found neither .xml or .html
![[Pasted image 20261026193038.png]]
The gobuster result returned, lets explore what manual is.
![[Pasted image 20261026193115.png]]
Okay i can see what it is being run on which is apache version 2.4, we can also match this with the /image route which says 2.4.48.
![[Pasted image 20261026193806.png]]
![[Pasted image 20261026193817.png]]
that led to nothing for now, lets run the tests again but with extensions 
![[Pasted image 20261026195205.png]]
Same result, let us try dirb.
![[Pasted image 20261026195520.png]]
Dirb found this but it is also not susetible to path traversal.
![[Pasted image 20261026195915.png]]
When visiting the /javascript a different eror is presented, but after researching that doesn't mean much also we have reconed that part. Now I will go back to the apache version and look up if there are known exploits. A google search lands us to CVE-2021-41773 and that gives us a Path Traversal Attack. My machine has a mind of its own and decided to change it's IP to 192.168.0.65 
![[Pasted image 20261026201020.png]]
Now let us try the Path Traversal attack.
![[Pasted image 20261026201205.png]]
I did it 5-6 times and that didn't work.
![[Pasted image 20261026201329.png]]
It does say that the default configuration has it as denied. Also this is for .49 not .48. Back onto google and I found CVE-2021-40438 lets try it.
![[Pasted image 20261026202423.png]]
![[Pasted image 20261026202408.png]]
That also failed, lets go back to what exists in robots.txt where it says ~myfiles.
![[Pasted image 20261026202825.png]]
![[Pasted image 20261026202839.png]]
its like a troll. but the directory name is a bit weird could that mean that the important directories or files are also like that. Before trying that lets check a dirb on it and that yielded not results.
![[Pasted image 20261026203132.png]]
Dirb found nothing using the norm.
![[Pasted image 20261026203328.png]]
Now lets try for this first Ill try it outside.
![[Pasted image 20261026203559.png]]
OOOO
![[Pasted image 20261026203701.png]]
Okay, this guy really like mazes what website does all this in the real world. could the image be the actual ssh private key or contain it. What is somewhere here, let us see the request if it is has something or the resposne in it and also download the image in the beginning. nothing was found in the request/resposne looks normal.
Lets move to the image, now I am no master in steganography or even a beginner so we will be using the internet and AI to assist with this.
![[Pasted image 20261026205231.png]]
Installed and ran a tool called zsteg on the image, and based on the AI analysis it found nothing meaning its a normal file.
![[Pasted image 20261026205821.png]]|After reading it and extracting all the strings, then removing all the U's we get nothing understandable. I might go for a hint as I have reached a dead end. I asked the AI for a hint and its easier than i thought fasttrack is a wordlist and my guess is that icex64 is the username.
![[Pasted image 20261026211029.png]]
Lets test this.
![[Pasted image 20261026211206.png]]
While asking the AI it leaked where the Secret is (even though i have previous asked it to not solve), turns out there is a file called .mysecret.txt and that it is encoded in base58 :) all this recon wasn't enough im trying to get it via dirb lets see.
![[Pasted image 20261026211448.png]]
here is the secret.
![[Pasted image 20261026211602.png]]
Stored the secret.![[Pasted image 20261026212437.png]]
ITs encoded lets decode it
![[Pasted image 20261026213049.png]]
And save the encoding
![[Pasted image 20261026212946.png]]
Good to know that the private key isn't accepted unless specific conditions are met.
![[Pasted image 20261026213015.png]]
After setting this .
![[Pasted image 20261026213033.png]]
![[Pasted image 20261026213532.png]]
Ai guide the way.
![[Pasted image 20261026213601.png]]
GOt the password with help lets goo. 
![[Pasted image 20261026214621.png]]
![[Pasted image 20261026214645.png]]
can't login back to my ai.
![[Pasted image 20261026214857.png]]
Really its because there is no extra empty line.
![[Pasted image 20261026215014.png]]
LETS GOOOOO.
![[Pasted image 20261026215036.png]]
WE are in.Let me look for flags
![[Pasted image 20261026215111.png]]
![[Pasted image 20261026215139.png]]
First flag found.
![[Pasted image 20261026215327.png]]
MY favorite thing to look at
![[Pasted image 20261026215344.png]]
The end was promising in this find.
![[Pasted image 20261026215418.png]]
I have seen a troll like this before.
![[Pasted image 20261026215455.png]]
Is that a marketing trick.
# Getting root access
![[Pasted image 20261026221911.png]]
shadow and passwd are untouchable in terms of changing them, but I see that python3.9 is available which is a scenario similar to what I saw in the cybersecurity diploma.
![[Pasted image 20261026222044.png]]
okay thats harder.
![[Pasted image 20261026222306.png]]
And switching users isn't allowed for this user.
![[Pasted image 20261026222829.png]]
The .secret file is what the note was talking about and also has specific permissions. I am astuck so ill ask the ai informing it to not spoil. Basically look at the import and try to play with that.
![[Pasted image 20261026224102.png]]
First find where the python package is and then try to play with it.
![[Pasted image 20261026224225.png]]
Found it.
![[Pasted image 20261026224311.png]]
And it is writeable. Let us edit it to give us a root bash script.
![[Pasted image 20261026224559.png]]
and now we test it.
![[Pasted image 20261026224907.png]]
A fail then a success. and we are in.
![[Pasted image 20261026225007.png]]
Okay so everything has to be in some other language.
![[Pasted image 20261026225055.png]]
and we have another way in to root.
![[Pasted image 20261026225233.png]]
A visit to GTFOBins
![[Pasted image 20261026225226.png]]
![[Pasted image 20261026225347.png]]
Im trying with bas but there is something wrong. Let us ask our AI , and it points me to something similar to the python trick by making a fake installation package and pointing it to the pip.
![[Pasted image 20261026233245.png]]
At last ( I used the walkthrough to get this done)
![[Pasted image 20261026233934.png]]
![[Pasted image 20261026234816.png]]
Tried to crack the passwords
![[Pasted image 20261026234638.png]]
Multiple fails, might call it a day here.
# Lessons Learnt 
1. The private key needs to end with a new line after the ---END.
2. how to extract the passphrase from a private key using johntheripper
	1. **With a passphrase:** The private key file is scrambled using encryption, so you must enter the correct passphrase every time you use it (or load it into an SSH agent) to unlock it.
	2. **Without a passphrase:** the private key file is stored in plain, readable text (though locked down by strict file permissions like `chmod 600`), meaning you can connect immediately using `i` without ever being asked for a password.
	3. In the real world the passpharse and the password to login to machine via ssh could be different if the password was prompted (if key-based auth with no system pass, public key logins are allowed).
3. You could rewrite python modules for privilege escalation (if they are writeable), same can be done to python files if you own the folder but not the file (deleted the file and make your own even if you don't the file), and the same can be done for pip installation.
4. Stenography is crazy even though there was nothing here 
# Resources
https://medium.com/@nadnine/empire-lupinone-walkthrough-4fe786443c64
