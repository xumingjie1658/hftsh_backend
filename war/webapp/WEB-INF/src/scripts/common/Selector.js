/**
 * Created by xumingjie on 15/10/13.
 */

'use strict';

import React from "react";

var styles = {
    selectWrap : {
        base : {
            display:"inline-block",
            position:'relative'
        },

        select : {
            WebkitAppearance : 'none',
            MozAppearance : 'none',
            appearance : 'none',
            border : 'none',
            padding : '0.5em 2em 0.5em 0.5em',
            background : 'transparent',
            position : 'relative',
            cursor : 'pointer',
            fontSize: "16px"
        },

        after : {
            display : 'block',
            width : '0px',
            height : '0px',
            content : "　",
            position : 'absolute',
            right : '0.5em',
            top : '50%',
            marginTop : '-0.25em',
            borderTop : '0.5em solid #777777',
            borderLeft : '0.5em solid transparent',
            borderRight : '0.5em solid transparent',
            MozPointerEvents: 'none',
            WebkitPointerEvents : 'none',
            pointerEvents : 'none'
        }
    }
};

var Selector = React.createClass({
    render : function() {
        return (
            <div style={{position:'absolute'}}>
                <span style={styles.selectWrap.base}>
                    <select name={this.props.name} id={this.props.name} style={styles.selectWrap.select}>
                        {this.props.options.map(function(item){
                            return (
                                <option key={item.key} value={item.value}>{item.text}</option>
                            )
                        })}
                    </select>
                </span>
                <span style={styles.selectWrap.after}></span>
            </div>
        )
    }
});

export default Selector;