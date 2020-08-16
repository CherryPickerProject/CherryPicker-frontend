import React, { useEffect, useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import PortalLayout from '../../layouts/PortalLayout';
import { DetailCard } from '../../components/DetailCard/DetailCard';
import { PaginationComponent } from '../../components/Pagination/Pagination';
import style from './Details.styles';
import { useLocation } from 'react-router-dom'
import CherryPickerApi from '../../api/CherryPickerApi';

// TODO: Pagination code is not yet done.

const Details = () => {

  const location = useLocation()

  const [totalDataCount, setTotalDataCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVenues() {
      setLoading(true);
      const query = location.state.detail; // User's query passed in here
      const venues = await CherryPickerApi.getVenues(query);
      setTotalDataCount(venues.totalRecords)
      setData(venues.data)
      setLoading(false);
    }
    fetchVenues();
  }, []);

  return (
    <PortalLayout pathname={"/detail"}>
      <div>
        <div className="row" style={style.filterbarStyle}>
          TODO: Add in the filter components here
        </div>
        {loading && data ? (
          <div>
            <div className="row">
              <Grid centered stackable columns={2}>
                <Grid.Column width={10}>
                  {[...Array(10)].map(() => (
                    <DetailCard />
                  ))}
                </Grid.Column>
                <Grid.Column width={4}>
                  <Segment style={style.detailCardBorderStyle}>
                    TODO: MAP
                  </Segment>
                </Grid.Column>
              </Grid>
            </div>
          </div>
        ) : (
            <div>
              <div className="row">
                <Grid centered stackable columns={2}>
                  <Grid.Column width={10}>
                    {data.map((result, index) => (
                      <DetailCard {...result} />
                    ))}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Segment style={style.detailCardBorderStyle}>
                      TODO: MAP
                  </Segment>
                  </Grid.Column>
                </Grid>
              </div>
            </div>
          )}
        <Grid centered>
          <Grid.Row style={style.paginationStyle}>
            <PaginationComponent totalPages={totalDataCount} />
          </Grid.Row>
        </Grid>
      </div>
    </PortalLayout>
  );
};

export default Details;
