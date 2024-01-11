import { AppBar, Container, MenuItem, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import i18n from "./i18n.js";
import { useTranslation } from 'react-i18next';
import { Toolbar } from '@mui/material';

function Header() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <AppBar position="static">
      <Container  maxWidth="xl">
        <Toolbar >
          <Link to='/'>
            <Typography textAlign="center">{t('part1')}</Typography>
          </Link>
          <Link to='/about'>
            <Typography textAlign="center">{t('part2')}</Typography>
          </Link>
          <MenuItem id='fi'>
            <Typography textAlign="center" onClick={() =>changeLanguage('fi')}>FI</Typography>
          </MenuItem>
          <MenuItem id='en'>
            <Typography textAlign="center" onClick={() =>changeLanguage('en')}>EN</Typography>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  )
}


export default Header;
