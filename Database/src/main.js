// mysql2 모듈 import
import mysql from 'mysql2';

// MySQL 연결 설정
const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'TestNodeDB'
});

// MySQL 서버 연결 시도
conn.connect((err) => {
  if (err) {
    console.error('MySQL connect failed', err);
    return;
  }

  console.log('MySQL connect success!');

  // 테스트를 위해 기존 데이터 전체 삭제
  clearTable();

  // 테이블 데이터 전체 삭제 함수
  function clearTable() {
    const sqlDeleteAll = "delete from TestTable";
    conn.query(sqlDeleteAll, (error) => {
      if (error) {
        console.error('전체 데이터 삭제 실패', error);
      } else {
        console.log('전체 데이터 삭제 완료!');
        insertData(0);  // 삭제가 끝난 뒤 Insert 시작
      }
    });
  }

  // Insert할 데이터
  const sqlInsert = "insert into TestTable (int_data, str_data) values (?, ?)";
  const input_data = [
    [100, "문자열1"],
    [200, "문자열2"],
    [300, "문자열3"]
  ];

  // 데이터 삽입 함수
  function insertData(index) {
    if (index >= input_data.length) {
      console.log('All inserts finished. Now selecting...');
      selectData();  // insert 다 끝나면 select 실행
      return;
    }

    conn.query(sqlInsert, input_data[index], (error) => {
      if (error) {
        console.error('Insert failed', error);
      } else {
        console.log(`Save finished ${index + 1}`);
        insertData(index + 1); // 다음 데이터 삽입
      }
    });
  }

  // 데이터 조회 함수 (Insert 완료 후 호출)
  function selectData() {
    const sqlSelect = "select int_data, str_data from TestTable";
    conn.query(sqlSelect, (error, rows) => {
      if (error) {
        console.error('Select failed', error);
      } else {
        console.log('Select results:');
        for (const obj of rows) {
          console.log("int_data:", obj.int_data, "| str_data:", obj.str_data);
        }
      }
      console.log('Now updating data...');
      updateData();  // select 완료 후 update 실행
    });
  }

  // 데이터 수정 함수
  function updateData() {
    const sqlUpdate = "update TestTable set str_data = ? where int_data = ?";
    const update_data = ["문자열100", 100];

    conn.query(sqlUpdate, update_data, (error) => {
      if (error) {
        console.error('Update failed', error);
      } else {
        console.log('Update finished!');
      }
      console.log('Now deleting data...');
      deleteData();  // update 완료 후 delete 실행
    });
  }

  // 데이터 삭제 함수
  function deleteData() {
    const sqlDelete = "delete from TestTable where int_data = ?";
    const delete_data = [100];

    conn.query(sqlDelete, delete_data, (error) => {
      if (error) {
        console.error('Delete failed', error);
      } else {
        console.log('Delete finished!');
      }
      console.log('Now selecting final data...');
      finalSelect(); // delete 완료 후 최종 select 실행
    });
  }

  // 최종 데이터 조회 및 연결 종료 함수
  function finalSelect() {
    const sqlSelect = "select int_data, str_data from TestTable";
    conn.query(sqlSelect, (error, rows) => {
      if (error) {
        console.error('Final select failed', error);
      } else {
        console.log('Final select results:');
        for (const obj of rows) {
          console.log("int_data:", obj.int_data, "| str_data:", obj.str_data);
        }
      }
      // 모든 작업 끝났으면 연결 종료
      conn.end((err) => {
        if (err) console.error('MySQL disconnect failed', err);
        else console.log('MySQL disconnect success!');
      });
    });
  }
});

