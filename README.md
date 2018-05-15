**Getting the project up and running:**  
- Clone this repo.  
- Run: npm i  


**Default Project Folder Structure**  
- apis/  
	- Any API endpoints you would create  
- app/  
	- TBD  
- bin/  
	 - Server start & stop files  
- config/  
	- All project configurations  
	- config/core/  
		- Route definitions, etc.  
	- config/env/  
		- Environment variables  
- core/  
	- Server manager  
- pubic/
	- Any statically served content
- routes/
	- Details for API routes
- tests/
	- All project tests e.g. Unit & Integration
- views/
	- Display files
- .eslintignore
	- Linting Rules to ignore
- .eslintrc.json
	- Linting Rules
- .gitignore
	- Project files to ignore from pushing up to GitHub
- package.json
	- Project Info & Dependencies
- README.md
	-	This file


**Where To Begin**  
This project uses modules so you can add only what you need. You can add any needed modules via: npm i node_<MODULE_NAME> --save  
- Additional project module repos:  
	- microservice_core  
	- rest_api (Rest API)  
	- mongo_api (MongoDB Connector)  
