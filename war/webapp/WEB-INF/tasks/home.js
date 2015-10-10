var task = require('./task');

var config = {
    module : 'home',
    dest : '../resources/assets/home',
    view : 'src/view/home/home.ftl',
    viewPath : 'src/view/',
    jsPath : 'src/scripts/',
    resourcesPath : '/resources/assets/',
    stylusPath : 'src/styl/'
}

task.build(config);