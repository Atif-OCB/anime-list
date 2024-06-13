import PropTypes from 'prop-types';
import Header from '../components/Header';

const MainLayout = (props) => {
  return (
    <div className="bg-slate-200 min-h-[100dvh] flex flex-col items-center">
      <Header />
      <main className="max-w-screen-lg w-full py-8 mx-2">
        {props.children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout