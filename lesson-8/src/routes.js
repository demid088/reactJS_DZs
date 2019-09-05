import Home from './containers/home';
import Blog from './containers/blog';
import Comments from './containers/comments';
import Users from './containers/users';
import User from './containers/user';
import Comment from './containers/comment';
import Messages from './containers/messages';
import SearchResult from './components/searchResult';

export default [
  {path: '/', component: Home, exact: true},
  {path: '/blog', component: Blog, exact: true},
  {path: '/comments', component: Comments, exact: true},
  {path: '/comments/:id', component: Comment, exact: true},
  {path: '/users', component: Users, exact: true},
  {path: '/users/:id', component: User, exact: true},
  {path: '/messages', component: Messages, exact: true},
  {path: '/search/:string', component: SearchResult, exact: true}
]