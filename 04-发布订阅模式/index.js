//  事件中心
const eventCenter = {
  eventList: {},
  subscribe(key, callback) {
    this.eventList[key] ??= new Map();
    const id = Symbol();
    this.eventList[key].set(id, callback);
    return id;
  },
  publish(key, ...args) {
    for (const [id, callback] of this.eventList[key]) {
      callback(...args);
    }
  },
  unSubscribe(id) {
    for (const key in this.eventList) {
      this.eventList[key].has(id) && this.eventList[key].delete(id);
    }
  },
};

// 订阅者
const id_100 = eventCenter.subscribe("100-house", console.log);

// 发送者
eventCenter.publish("100-house", "message-100");
