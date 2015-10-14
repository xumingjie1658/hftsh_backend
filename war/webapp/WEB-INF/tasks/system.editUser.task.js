/**
 * Created by xumingjie on 15/10/14.
 */


var task = require('./task');

var config = {
    module : 'system.editUser',
    dest : '../resources/assets/system/editUser/',
    view : 'src/view/system/editUser.ftl',
    viewPath : 'src/view/system/',
    jsPath : 'src/scripts/system/editUser/',
    resourcesPath : '/resources/assets/system/editUser/',
    stylusPath : 'src/styl/system/editUser/'
}

task.build(config);
