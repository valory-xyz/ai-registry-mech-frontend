import React, { useEffect, useState } from 'react';
import { Segmented } from 'antd';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderTitle } from 'common-util/Title';
import { MEDIA_QUERY } from '@autonolas/frontend-library';
import { URL } from 'util/constants';
import { ListAgents } from './ListAgents';
import { ListServices } from './ListServices';

const MECH_MM = 'mechMM';
const LEGACY = 'legacy';

const MECH_TYPES = [{
  value: MECH_MM,
  label: 'Mech Marketplace',
}, {
  value: LEGACY,
  label: 'Legacy',
}];

const Content = styled.div`
  position: relative;

  > .ant-segmented {
    position: absolute;
  }

  ${MEDIA_QUERY.tabletL} {
    > .ant-segmented {
      position: relative;
      margin-bottom: 8px;
    }
  }
`;

export const Mechs = () => {
  const router = useRouter();
  const [mechType, setMechType] = useState(MECH_MM);

  const handleChangeMechType = (e) => {
    router.push(
      e === MECH_MM ? URL.MECHS : URL.MECHS_LEGACY,
    );
  };

  useEffect(() => {
    if (router.asPath.includes(URL.MECHS_LEGACY)) {
      setMechType(LEGACY);
    } else {
      setMechType(MECH_MM);
    }
  }, [router]);

  return (
    <div>
      <HeaderTitle title="Mechs" description="View existing agents" />

      <Content>
        <Segmented options={MECH_TYPES} value={mechType} onChange={handleChangeMechType} />
        {mechType === MECH_MM && <ListServices />}
        {mechType === LEGACY && <ListAgents />}
      </Content>
    </div>
  );
};
