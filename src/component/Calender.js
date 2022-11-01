import '../style/calender.css'
import { useState } from 'react';

// moment 라이브러리 사용
import moment from 'moment';

const Calender = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;

  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className='day' key={week}> {
          Array(7).fill(0).map((data, index) => {
            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

            // 날짜가 오늘이면 이쁜색
            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
              return (
                <td className='today' key={index}>
                  <span>{days.format('D')}</span>
                </td>
              );
              // 그 달의 날짜가 아니면 회색
            } else if (days.format('MM') !== today.format('MM')) {
              return (
                <td key={index} style={{ backgroundColor: '#EBEBEB', color: '#AFAFAF' }} >
                  <span>{days.format('D')}</span>
                </td>
              );
              // 둘 다 아니면 X
            } else {
              return (
                <td key={index} style={{ backgroundColor: '#FFF', color: '#5F5F5F' }}>
                  <span>{days.format('D')}</span>
                </td>
              );
            }
          })
        } </tr>);
    }
    return result;
  }

  // 월 영어로
  const eng_month = () => {
    if (today.month() == 0) return 'January';
    if (today.month() == 1) return 'February';
    if (today.month() == 2) return 'March';
    if (today.month() == 3) return 'April';
    if (today.month() == 4) return 'May';
    if (today.month() == 5) return 'June';
    if (today.month() == 6) return 'July';
    if (today.month() == 7) return 'August';
    if (today.month() == 8) return 'September';
    if (today.month() == 9) return 'October';
    if (today.month() == 10) return 'November';
    if (today.month() == 11) return 'December';
    else return 'January';
  }

  return (
    <div className="Calender">
      <nav className='head'>
        {/* 월 */}
        <div className='month'>
          <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >＜</button>
          <h2>{eng_month()} {today.format('YYYY')}</h2>
          <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >＞</button>
        </div>

        {/* 일정 추가 버튼 */}
        <button className='add' onClick={() => {}}>
          Add
        </button>
      </nav>

      {/* 요일 */}
      <div className="dayOfweek">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((el) => (
          <div className='day_box' key={el}>
            <span className='text'>{el}</span>
          </div>
        ))}
      </div>
      
      {/* 달력 */}
      <table className='body'>
        <tbody>
          {calendarArr()}
        </tbody>
      </table>
    </div>
  );
}

export default Calender;