# gulp-boilerplate
A basic boilerplate I setup. It's tasked to use ES6(Babel), SASS, jsHint and it can optionally deploy your project to Surge.

## Setting up
1: Create a new folder/directory and type ```git git clone https://github.com/TylerDelRosario/gulp-boilerplate.git```
2: By default, deploying to surge.sh is disabled, in order to enable it, uncomment the following code:
```javascript
/*---You need to edit your site name before it deploys---*/
// gulp.task('deploy', [], ()=>{
// 	return surge({
// 		project: './src',
// 		domain: 'your-site-name-here.surge.sh'
// 	})
// });
```

and

```javascript
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', /*'deploy'*/]);
```

Moreover, change the name of your domain and make it unique.
3:Start coding!
