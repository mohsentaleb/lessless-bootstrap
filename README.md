"LESS"less Bootstrap
==================
It's simply compiled version of bootstrap ".less" files in separate ".css" files for easier development. All these files are "@imported"ed in `bootstrap.css` so that you could only link to this file in your HTML page and have all the bootstrap awsomeness.

How to Use While in Development
================================

1. Copy all the files to your CSS folder
2. include `[your-css-folder]/bootstrap.css` and `[your-css-folder]/website.css` in your HTML page:  

>	<link href="/css/bootstrap.css" rel="stylesheet" media="screen" /&gt;  
>	<link href="/css/website.css" rel="stylesheet" media="screen" /&gt;  

How to Use: For Production
==========================
[Grunt](http://gruntjs.com) is used for the build process.
Grunt and Grunt plugins are installed and managed via [npm](https://npmjs.org/), the [Node.js](http://nodejs.org/) package manager.
Considering you have node.js installed, by running the following command you will install Grunt globally in your machine:
	
	npm install -g grunt-cli

Then go to project's root folder and run: 

	npm install

This will install required plugins, defined in our package.json file in root folder. e.g. `grunt-contrib-concat`.
Finally, you just need to run the following command to get all the production files in `dist/` folder.

	grunt

Then you can link to your concatenated CSS file in your HTML page like:

	<link href="/dist/website.css" rel="stylesheet" media="screen" />

License
=======
"LESS"less Bootstrap is available under [WTFPL](http://sam.zoy.org/wtfpl/), though obviously, if you want to dual-license any contributions that's cool.