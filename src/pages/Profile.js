import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function Profile() {
  return (
    <ProfileContainer>
      <h1>내 프로필</h1>
      {/* 여기에 사용자 프로필 정보를 표시하는 로직을 추가하세요 */}
    </ProfileContainer>
  );
}

export default Profile;