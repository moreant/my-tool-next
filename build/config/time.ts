import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const getBuildTime = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const buildTime = dayjs.tz(Date.now(), 'Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');

  return buildTime;
};

export const getVersion = async () => {
  const packageJson = await import('../../package.json');
  return packageJson.version;
};
