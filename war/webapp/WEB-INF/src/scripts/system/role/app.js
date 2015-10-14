/**
 * Created by xumingjie on 15/10/11.
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

var SystemRoleApp = React.createClass({
    //https://facebook.github.io/react/tips/initial-ajax.html
    getInitialState : function(){
        return {
            roles : null
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



    render : function(){
        var columns = [
            {name: 'id', label: '序号', numeric: true},
            {name: 'name', label: '角色名', numeric: false},
            {name: 'operation', label: '操作', numeric: false}
        ];

        var data = new Array();

        if(this.state.roles != null){
            this.state.roles.map(function(item){
                data.push({
                    id : item.id,
                    name : item.name,
                    operation : <a style={{color:"#330099"}}>修改</a>
                });
            });
        }
        return (
            <div id="content-container">
                <div id="content-top-container">
                    <div id="role-title">角色管理</div>
                    <a href="/system/role/add">
                        <FABButton id="role-add-button" ripple={false}>
                            <Icon name="add" />
                        </FABButton>
                    </a>
                </div>
                <DataTable style={styles.dataTable} columns={columns} data={data} selectable={false} />
            </div>
        )
    }
});

export default SystemRoleApp;