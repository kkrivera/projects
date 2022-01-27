import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import previousWebsitesData from '../public/data/previousWebsitesData';
import styles from '../styles/Archive.module.css';
import Image from 'next/image';
import { useContext } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';

const ArchivePage: NextPage = () => {
  const { isMobile } = useContext(IsMobileContext);
  return (
    <div className={styles.archive}>
      <Grid container justifyContent="center" alignItems="center" rowSpacing={!isMobile ? 10 : 2}>
        <Grid item xs={11}>
          <h1>WEBSITE ARCHIVE</h1>
          <h4>
            Here you can see previous versions of my portfolio website. As I continue to learn more and refine what I
            learn, previous iterations of this site can be found here.
          </h4>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          {previousWebsitesData.map((site) => (
            <Grid item xs={11} md={4}>
              <div className={styles.previousSite}>
                <h2>Retired: {site.retiredDate}</h2>
                <Image src={site.pic} layout="responsive" />
                <a href={site.link} target="_blank">
                  <Button variant="contained" color="secondary">
                    Visit Site
                  </Button>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ArchivePage;
