var task = require('./task');

var config = {
    module : 'system.role',
    dest : '../resources/assets/system/role/',
    view : 'src/view/system/role.ftl',
    viewPath : 'src/view/system/',
    jsPath : 'src/scripts/system/role/',
    resourcesPath : '/resources/assets/system/role/',
    stylusPath : 'src/styl/system/role/'
}

task.build(config);