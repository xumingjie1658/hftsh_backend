/**
 * Created by xumingjie on 15/10/14.
 */

'use strict';

import React from "react";

import Button from "../../mdl-react/Button";

import Selector from "../../common/Selector"

var EditUserApp = React.createClass({
    getInitialState : function() {
        return {
            roles : null,
            operationTip : ' '
        }
    },

    editPasswordButtonClicked : function() {

    },

    deleteUserButtonClicked : function() {

    },

    componentDidMount : function() {
        var _this = this;
        $.ajax({
            type : 'get',
            url : '/role/role-list.json',
            dataType : 'json',
            success : function(dataJson) {
                if( dataJson.success ) {
                    console.log(dataJson);
                    _this.setState({
                        roles : dataJson.data
                    });
                }
            }
        })
    },

    render : function() {
        var selectOption = [];

        if(this.state.roles != null) {
            this.state.roles.map(function(item){
                selectOption.push({
                    key : item.id,
                    text : item.name,
                    value : item.id
                });
            })
        }

       return (
           <div id="content-container">
               <div id="content-top-container">
                   <div id="edit-user-title">编辑后台用户</div>
                   <div id="edit-user-tips">{this.state.operationTip}</div>
               </div>
               <div id="edit-user-container" style={{textAlign: 'center'}}>
                   <div className="edit-password-container">
                       <div className="edit-user-group">
                           <div className="edit-user-group-title">新密码</div>
                           <div className="mdl-textfield mdl-js-textfield">
                               <input className="mdl-textfield__input" type="password" id="password" name="password" />
                               <label className="mdl-textfield__label" htmlFor="password">请输入新密码</label>
                           </div>
                           <div className="edit-user-group-title">确认新密码</div>
                           <div className="mdl-textfield mdl-js-textfield">
                               <input className="mdl-textfield__input" type="rePassword" id="rePassword" name="rePassword" />
                               <label className="mdl-textfield__label" htmlFor="rePassword">请确认新密码</label>
                           </div>
                       </div>
                       <Button raised={true} colored={true} ripple={false} onClick={this.editPasswordButtonClicked}>保存</Button>
                   </div>
                   <div className="edit-role-container">
                       <div style={{width: '160px', height: '34px', position: 'relative', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px', overflow:'hidden'}}>
                           <div style={{float:'left',marginTop: '8px'}} className="add-user-group-title">选择角色</div>
                           <div style={{float:'left', marginLeft: '10px'}}>
                               <Selector name={'roleId'} options={selectOption} />
                           </div>
                       </div>
                       <Button raised={true} colored={true} ripple={false} onClick={this.editPasswordButtonClicked}>保存</Button>
                   </div>
                   <div className="delete-user-container">
                       <Button raised={true} colored={true} ripple={false} onClick={this.deleteUserButtonClicked}>删除用户</Button>
                   </div>
               </div>
           </div>
       );
    }
});

export default EditUserApp;