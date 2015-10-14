/**
 * Created by xumingjie on 15/10/13.
 */

'use strict';


import React from "react";
import Selector from "../../common/Selector";
import Button from "../../mdl-react/Button";

var AddUserApp = React.createClass({
    getInitialState : function(){
        return {
            roles : null,
            operationTip : ""
        }
    },


    componentDidMount : function(){
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

    saveButtonClicked : function() {
        console.log('saveButtonClicked');
        var _this = this;
        $.ajax({
            type : 'post',
            url : '/role/add-user.do',
            dataType : 'json',
            data : {
                '_csrf' : document.getElementById("csrf-token").innerHTML,
                'username' : document.getElementById("username").value,
                'password' : document.getElementById("password").value,
                'rePassword' : document.getElementById("rePassword").value,
                'roleId' : document.getElementById('roleId').selectedIndex
            },
            success : function(dataJson) {
                console.log(dataJson);
                if(dataJson.success) {
                    _this.setState({
                        operationTip : "操作成功"
                    });
                }
                else{
                    _this.setState({
                        operationTip : "操作失败"
                    });
                }
            }
        });
    },

    render : function(){

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
                    <div id="add-user-title">添加后台用户</div>
                    <div id="add-user-tips">{this.state.operationTip}</div>
                </div>
                <div id="add-user-container" style={{textAlign: 'center'}}>
                    <div className="add-user-group">
                        <div className="add-user-group-title">用户名</div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="username" name="username" />
                            <label className="mdl-textfield__label" htmlFor="username">请输入用户名</label>
                        </div>
                    </div>
                    <div className="add-user-group">
                        <div className="add-user-group-title">密码</div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="password" id="password" name="password" />
                            <label className="mdl-textfield__label" htmlFor="password">请输入密码</label>
                        </div>
                    </div>
                    <div className="add-user-group">
                        <div className="add-user-group-title">确认密码</div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="password" id="rePassword" name="rePassword" />
                            <label className="mdl-textfield__label" htmlFor ="rePassword">请确认密码</label>
                        </div>
                    </div>
                    <div className="add-user-group" style={{width: '160px', height: '34px', position: 'relative', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', overflow:'hidden'}}>
                        <div style={{float:'left',marginTop: '8px'}} className="add-user-group-title">选择角色</div>
                        <div style={{float:'left', marginLeft: '10px'}}>
                            <Selector name={'roleId'} options={selectOption} />
                        </div>
                    </div>
                    <input type="hidden" name={document.getElementById('csrf-parameterName').innerHTML} value={document.getElementById('csrf-token').innerHTML}/>
                    <div className="add-user-button">
                        <Button raised={true} colored={true} ripple={false} onClick={this.saveButtonClicked}>保存</Button>
                    </div>
                </div>
            </div>
       )
    }

});

export default AddUserApp;