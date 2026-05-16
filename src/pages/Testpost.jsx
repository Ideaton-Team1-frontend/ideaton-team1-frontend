import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PreviewImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  margin-top: 20px;
`;

function Testpost() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 앞 페이지에서 넘겨준 데이터 꺼내기 (안 넘겨졌을 때를 대비해 빈 객체 처리)
  const { previewUrl, location: roomName } = location.state || {};

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>선택된 장소: {roomName || '없음'}</h2>
      
      {/* 이미지가 있으면 띄워주기 */}
      {previewUrl ? (
        <PreviewImage src={previewUrl} alt="선택한 갤러리 이미지" />
      ) : (
        <p>선택된 이미지가 없습니다.</p>
      )}

      <br />
      <button onClick={() => navigate(-1)}>다시 고르기</button>
    </div>
  );
}

export default Testpost;