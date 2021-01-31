import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import Vertical from '../../components/Vertical';
import List from '../../components/List';
import Horizontal from '../../components/Horizontal';

const Container = styled.View`
  margin-top: 30px;
`;

class TVPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollContainer
        refreshingFunc={this.props.refreshingFunc}
        loading={this.props.loading}>
        <Container>
          <HorizontalSlider title="Top Reated TV Shows">
            {this.props.popular.map((show) => (
              <Vertical
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                votes={show.vote_average}
              />
            ))}
          </HorizontalSlider>
          <List title="Airing Tody">
            {this.props.today.map((show) => (
              <Horizontal
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                overview={show.overview}
              />
            ))}
          </List>
        </Container>
      </ScrollContainer>
    );
  }
}

export default TVPresenter;
