import React, { Component } from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import Vertical from '../../components/Vertical';

class TVPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollContainer loading={this.props.loading}>
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
      </ScrollContainer>
    );
  }
}

export default TVPresenter;
