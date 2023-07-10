import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView } from '../views';
import { NoteViews } from '../views/NoteViews';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*    <Typography >
        Ea Lorem culpa exercitation ullamco cupidatat fugiat eu. Elit laborum
        consequat labore consectetur dolor ullamco cillum cillum magna irure ut.
        Sint minim excepteur anim eu dolor eu. Tempor sit enim cupidatat ex
        minim occaecat id tempor elit ut nulla et. Et labore dolor irure labore
        ut elit in reprehenderit reprehenderit veniam mollit officia consequat.
        Nulla mollit aliquip Lorem est pariatur veniam proident excepteur fugiat
        sunt voluptate.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteViews /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
