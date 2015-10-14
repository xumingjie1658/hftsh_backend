var task = require('./task');

var config = {
    module : 'home',
    dest : '../resources/assets/home/',
    view : 'src/view/home/home.ftl',
    viewPath : 'src/view/home/',
    jsPath : 'src/scripts/home/',
    resourcesPath : '/resources/assets/home/',
    stylusPath : 'src/styl/home/'
}

task.build(config);