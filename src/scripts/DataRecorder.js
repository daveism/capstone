const datapi = 'https://script.google.com/macros/s/AKfycbyuiBMNkqa5WcvtZIVyTXKkVipmceDb33reJmkDjL_ZVLEr9MXFCEnQOg/exec';
          
class DataRecorder {
  constructor(UID) {
    this.uuid = UID
  }

  setEvent(category = '', value = 0) {
    // get varriables for
    this.date = new Date().toISOString();
    this.data = value;
    this.category = category;

    // study to JSON
    const jsondata = {
      uuid: this.uuid,
      category: this.category,
      data: this.data,
      date: this.date
    };

    const dataAPIURL = new URL(datapi);
    dataAPIURL.search = new URLSearchParams(jsondata);
    fetch(dataAPIURL);
  }
}

export default DataRecorder;
