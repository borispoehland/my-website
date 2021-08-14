import getQuicklinks from '../../staticdata/quicklinks';
import ToQuicklinkConverter from './converters/ToQuicklinkConverter';

const QuicklinkBar = (): JSX.Element => {
  return (
    <div className="quicklink-bar">
      {getQuicklinks().map(ToQuicklinkConverter)}
    </div>
  );
};

export default QuicklinkBar;
