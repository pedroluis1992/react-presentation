import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
class CardExample extends Component {
  render() {
    return (
      <div>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={this.props.title}
            description={this.props.description}
          />
        </Card>,
      
      </div>
    );
  }
}
export default CardExample;