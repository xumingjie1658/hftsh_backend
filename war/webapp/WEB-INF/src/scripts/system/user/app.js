/**
 * Created by xumingjie on 15/10/12.
 */

'use strict';

import React from "react";
import FABButton from "../../mdl-react/FABButton";
import Icon from "../../mdl-react/Icon";
import DataTable from '../../mdl-react/DataTable';

var styles = {
    dataTable: {
        width: "100%",
        marginTop: "40px"
    }
}

var SystemUserApp = React.createClass({
    getInitialState : function(){
        return {
            users : null
        }
    },

    componentDidMount : function() {
        var _this = this;
        $.ajax({
            type : 'get',
            url : '/role/user-list.json',
            dataType : 'json',
            success : function(dataJson) {
                if( dataJson.success ) {
                    console.log(dataJson);
                    _this.setState({
                        users : dataJson.data
                    });
                }
            }
        })
    },

    render : function() {
        var columns = [
            {name: 'id', label: '序号', numeric: true},
            {name: 'username', label: '用户名', numeric: false},
            {name: 'role', label: '角色', numeric: false},
            {name: 'createTime', label: '创建时间', numeric: false},
            {name: 'operation', label: '密码', numeric: false}
        ];

        var data = new Array();

        if(this.state.users != null){
            this.state.users.map(function(item){
                data.push({
                    id : item.id,
                    username : item.name,
                    role: item.role,
                    createTime : new Date(item.createTime * 1000).toLocaleDateString(),
                    operation : <a style={{color:"#330099"}} href={"/system/user/edit?userId=" + item.id}>修改</a>
                });
            });
        }

        return (
            <div id="content-container">
                <div id="content-top-container">
                    <div id="user-title">后台用户管理</div>
                    <a href="/system/user/add">
                        <FABButton id="user-add-button" ripple={false}>
                            <Icon name="add" />
                        </FABButton>
                    </a>
                </div>
                <DataTable style={styles.dataTable} columns={columns} data={data} selectable={false} />
            </div>
        )

    }

});

export default SystemUserApp;