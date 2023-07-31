import { Routes, Route, useLocation } from 'react-router-dom';

import Header from 'src/Layouts/Header';
import Footer from 'src/Layouts/Footer';

import Main from 'src/views/Main';
import Authentication from 'src/views/Authentication';
import Search from 'src/views/Search';
import UserPage from 'src/views/UserPage';
import BoardDetail from 'src/views/Board/Detail';
import BoardWrite from 'src/views/Board/Write';
import BoardUpdate from 'src/views/Board/Update';

import './App.css';
import { AUTH_PATH, BOARD_NUMBER_PATH_VARIABLE, BOARD_RATH, DETAIL_RATH, MAIN_PATH, SEARCH_PATH, SEARCH_WORD_PATH_VARIABLE, UPDATE_RATH, USER_EMAIL_PATH_VARIABLE, USER_PAGE_PATH, WRITE_RATH } from './constants';

//! 메인화면 - path: '/' / component: <Main />
//! 로그인 / 회원가입 - path: '/auth' / component: <Authentication />
//! 검색화면 - path: '/search/:searchWord' / component: <Search />
//! 유저페이지 - path: '/User-page' / component: <UserPage />
//! 게시글 상세 - path: '/board/detail/:boardNumber' / component: <BoardDetail />
//! 게시글 작성 - path: '/board/write' / component: <BoardWrite />
//! 게시글 수정 - path: '/board/update/:boardNumber' / component: <BoardUpdate />

function App() {

  //        state       //
  // description: 현재 페이지 url 상태 //
  const { pathname } = useLocation();

  //        function        //

  //        effect        //

  //        render        //
  return (
    <>
      <Header />
      <Routes>
        <Route path={MAIN_PATH} element={<Main />} />
        <Route path={AUTH_PATH} element={<Authentication />} />
        <Route path={SEARCH_PATH(SEARCH_WORD_PATH_VARIABLE)} element={<Search />} />
        <Route path={USER_PAGE_PATH(USER_EMAIL_PATH_VARIABLE)} element={<UserPage />} />
        <Route path={BOARD_RATH}>
          <Route path={DETAIL_RATH(BOARD_NUMBER_PATH_VARIABLE)} element={<BoardDetail />} />
          <Route path={WRITE_RATH} element={<BoardWrite />} />
          <Route path={UPDATE_RATH(BOARD_NUMBER_PATH_VARIABLE)} element={<BoardUpdate />} />
        </Route>
      </Routes>
      { pathname !== AUTH_PATH && (<Footer />) }
    </>
  );
}

export default App;
