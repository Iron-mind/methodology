# methodology
Web Full-Stack   How to start projects with React, Redux, TypeScript, express, sequelize and PostgreSQL

# SSH
In your pc create .ssh folder in root user location.

1. 
```bash
ssh-keygen
```

2. You can use this public key in github. You have to add the key in sshkeys on your github settings.
```bash
cat id_rsa.pub
```


3. To active ssh agent
```bash
 eval $(ssh-agent -s)
```

4. Adding private key
```bash
 ssh-add ~/.ssh/id_rsa
```
