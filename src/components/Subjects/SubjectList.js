import React from 'react';
import {computer_science, 
        language, 
        data_science,
        business_management,
        engineering,
        humanities
} from './data';
import Subject from '../../components/Subjects/Subject';
import KeyboardIcon from "@material-ui/icons/Keyboard";
import TranslateIcon from "@material-ui/icons/Translate";
import TimelineIcon from "@material-ui/icons/Timeline";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from '@material-ui/icons/People';

const SubjectList = () => {
    return (
      <div className="subject__container">
        <Subject
          Icon={<KeyboardIcon />}
          title="Computer Science"
          data={computer_science}
        />
        <Subject Icon={<TranslateIcon />} title="Language" data={language} />
        <Subject
          Icon={<TimelineIcon />}
          title="Data Science"
          data={data_science}
        />
        <Subject
          Icon={<BusinessCenterIcon />}
          title="Business &amp; Management"
          data={business_management}
        />
        <Subject
          Icon={<SettingsIcon />}
          title="Engineering"
          data={engineering}
        />
        <Subject Icon={<PeopleIcon />} title="Humanities" data={humanities} />
      </div>
    );
}

export default SubjectList;
