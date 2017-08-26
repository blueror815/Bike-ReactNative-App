'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Linking,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    } = ReactNative;
import {colors, styles} from "../Styles";
import { Icon } from 'react-native-material-design';
import { Button } from 'react-native-material-design';


module.exports = React.createClass({

    propTypes: {
        url: React.PropTypes.string
    },

    handleClick: function () {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    },

    render: function () {
        var text = this.props.text || '';
        var color = this.props.color || colors.action;
        var size = this.props.size || 16;
        var iconSize = this.props.iconSize ? this.props.iconSize : size;
        var icon = null;
        var action = this.props.action ? this.props.action : this.handleClick
        if (this.props.icon) {
            icon = <Icon name={this.props.icon}
                         color={color}
                         size={iconSize}
                         style={{marginRight: iconSize/2}} />
        }
        return (
                    <View style={this.props.link}>
                            <Button
                            onPress={action}
                            text={"Request"}
                            primary={colors.action}
                            style={[styles.primary_button, this.props.style]}
                        />
                    </View>
                
      

        );
    }
});
