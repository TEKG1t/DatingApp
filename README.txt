Here are some things i noted while learning and writing angular:

Update 2021/11/26:
How to install .Net SDK and Angular to work with VSCode in Ubuntu 20.04
-.NET Core SDK (5.0 because API structure is different in 6.0)
	https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu#2004-
	->Follow the instructions for your specific OS
	->If you can run "dotnet --version" without sudo with output of your version it likely was successful
	->C# extension on new project should prompt you with building build task instead of an omnisharp sdk not found error
	->"dotnet dev-certs https --trust" for the browser to display the contents by trusting the certificate from .NET
	->"https://localhost:5001/weatherforecast" to see in browser

-Anuglar CLI (Version 12 for ngx-bootstrap support as of November 2021)
	- You can check ngx-bootstrap latest support version here
		Website: 	https://valor-software.com/ngx-bootstrap/#/
		Compatibility:	https://valor-software.com/ngx-bootstrap/#/documentation#compatibility
	- Install Node.js (basic framework for Angular languages)
		-> Angular 12 requires nodejs v12. 16.10 or above
		-> Node Version Manager is huge quality of life
		 - Mit NVM:	https://joachim8675309.medium.com/installing-node-js-with-nvm-4dc469c977d9
				http://bit.ly/2Hn8HjG
			-> Startup file: sudo nano ~/.<startupfile>
				https://askubuntu.com/questions/524742/using-vi-to-edit-a-file-in-terminal
			-> nvm install node
				newest node.js version (for Angular 12: 16.13.0)
	- Angular 12
		npm install -g @angular/cli@12
		ng --version
		-> check for version 12 across the board
		ng new webapi --strict false
		cd client
		ng serve
		-ng without sudo should be successfull

Source Control:
Install Git:	http://git-scm.com/
Github acc:	https://github.com/


Resetting the Database: (API not running)
	dotnet ef database drop
	dotnet ef database update

Angular Generate Command (in src/app folder)
	help command			ng g -h
		-> g is generate
	component creation		ng g c nav --skip-tests
		-> c is component
		-> nav is name
		-> --skip-tests is for not creating a test file
	-Component html declaration in nav.component.html
	-Angular component in nav.component.ts (name is selector )
	-That name can be added in <selector></selector> in app.component.html

Bootstrap examples
https://getbootstrap.com/docs/5.1/examples/
	->rightclick + inspect then copy class element

Emmet Abreviation
div.container
	->div is name of what we want to add
	->container is class we want to apply
	=> Tab to add

Two way binding
	->Take something from something thats entered in an angular form (in class.component.html) and update something inside our component (class.component.ts)
	->Banana in a Box: [()]				(two way binding between template and component)
		- [] for receiving from our component	(component to template)
		- () data the other way			(template to component)
	->Snippet: 	a-ngModel
			a-ngIf

Angular services
	->In seperate folder because shared among components
	->generate service: ng g s account --skip-tests
	->Services are singelton, doesnt get destroyed until program closed (components are destroyed when not in use, services arent)

Typescript
	-> "=" to assign, ":" to declare type
	-> "!!object" is if(object==null){ return false; } else { return true; }

Replay subject
	-> "Buffer" that returns the latest value(s) it had

Input property
	-> parent to child communications (eg send users)
Output property
	->child to parent communications
	->4 parts (output parameter, output method, receiver method, binding in html)

Toastr Notifications
	->For example to display errors in browser
	->install on client level
	->npm install ngx-toastr

Angular route guards
	->Then the user can not go to a guarded url
	->_guards folder
	->ng g guard auth --skip-tests
	->dummy route guard to protect all together

Angular Bootstrap or Bootswatch themes
	https://bootswatch.com/
	=>Different Free Themes for a website
	->install on client level
	->npm install bootswatchz
	->usage: in angular.json apply after bootstrap stylesheets in styles

Angular Module creation
	->In _modules folder
	->ng g m shared --flat
		->--flat prevents folder creation
		->Modules have no tests

Angular (html) interceptors
-for handling errors on a global level
	ng g interceptor error --skip-tests

Generate Random Json Website
https://json-generator.com/

Repository pattern
	-Layer of abstraction from DataContext meaning access to the Database
	-Instead of 1000 methods there are 4 methods to interact with database ->simpler code, more readable/understandable

Json to ts website
http://www.json2ts.com/

ngx-bootstrap:
https://valor-software.com/ngx-bootstrap/#/

ngx-gallery:
https://www.npmjs.com/package/@kolkov/ngx-gallery
