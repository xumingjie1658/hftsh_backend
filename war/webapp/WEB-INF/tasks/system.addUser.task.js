/**
 * Created by xumingjie on 15/10/13.
 */

var task = require('./task');

var config = {
    module : 'system.addUser',
    dest : '../resources/assets/system/addUser/',
    view : 'src/view/system/addUser.ftl',
    viewPath : 'src/view/system/',
    jsPath : 'src/scripts/system/addUser/',
    resourcesPath : '/resources/assets/system/addUser/',
    stylusPath : 'src/styl/system/addUser/'
}

task.build(config);
