import React, { useEffect, useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import mockSearchDetails from '../../api/searchDetails';
import PortalLayout from '../../layouts/PortalLayout';
import { DetailCard } from '../../components/DetailCard/DetailCard';
import { PaginationComponent } from '../../components/Pagination/Pagination';
import style from './Details.styles';
import { DetailFilter } from '../../components/DetailFilter/DetailFilter';
import { MapContainer } from '../../components/MapContainer/MapContainer';

const location = {
  address: 'testing',
  lat: 103.854371,
  lng: 1.313174,
}

const Details = ({ location: { pathname, search } } = {}) => {
  const [mockData, setMockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMockSearchDetails = async () => {
    const details = await mockSearchDetails(search);
    const result = [];
    details.forEach((detail) => {
      result.push({
        title: detail.title,
        location: detail.location,
        description: detail.description,
        imageLink: detail.images[0],
        price: detail.price,
        link: detail.link
      });
    });
    setMockData(result);
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => getMockSearchDetails(search), 1000);
  });
  return (
    <PortalLayout pathname={pathname}>
      <div>
        <div className="row" style={style.filterbarStyle}>
          <DetailFilter></DetailFilter>
        </div>
        {loading ? (
          <div>
            <div className="row">
              <Grid centered stackable columns={2}>
                <Grid.Column width={9}>
                  {[...Array(10)].map(() => (
                    <DetailCard />
                  ))}
                </Grid.Column>
                <Grid.Column width={5}>
                  <Segment style={style.detailCardBorderStyle}>
                    <MapContainer location={location}></MapContainer>
                  </Segment>
                </Grid.Column>
              </Grid>
            </div>
          </div>
        ) : (
            <div>
              <div className="row">
                <Grid centered stackable columns={2}>
                  <Grid.Column width={9}>
                    {mockData.map((result) => (
                      <DetailCard {...result} />
                    ))}
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Segment style={style.detailCardBorderStyle}>
                      <MapContainer></MapContainer>
                  </Segment>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
          )}
        <Grid centered>
          <Grid.Row style={style.paginationStyle}>
            <PaginationComponent totalPages={mockData.length} />
          </Grid.Row>
        </Grid>
      </div>
    </PortalLayout>
  );
};

export default Details;
