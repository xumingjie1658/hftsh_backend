var task = require('./task');

var config = {
    module : 'system.user',
    dest : '../resources/assets/system/user/',
    view : 'src/view/system/user.ftl',
    viewPath : 'src/view/system/',
    jsPath : 'src/scripts/system/user/',
    resourcesPath : '/resources/assets/system/user/',
    stylusPath : 'src/styl/system/user/'
}

task.build(config);