const datapi = 'https://script.google.com/macros/s/AKfycbyuiBMNkqa5WcvtZIVyTXKkVipmceDb33reJmkDjL_ZVLEr9MXFCEnQOg/exec';

class DataRecorder {
  constructor(UID) {
    this.uuid = UID;
  }

  setEvent(props) {
    // get varriables for
    const datestamp = new Date().toISOString();
    const jsondata = { uuid: this.uuid, datestamp, ...props };
    // console.log('recordData', JSON.stringify(jsondata));

    const dataAPIURL = new URL(datapi);
    dataAPIURL.search = new URLSearchParams(jsondata);
    fetch(dataAPIURL);
  }
}

export default DataRecorder;
