const counter = document.getElementById('counter');

window.electronAPI.handleCounter((event, value) => {
  const oldValue = Number(counter.innerText);
  const newValue = oldValue + value;
  counter.innerText = newValue;
  event.sender.send('counter-value', newValue);
  console.log('Event: ', event);
  console.log('Event.sender: ', event.sender);
  console.log('Event.number: ', event.Number);
  console.log('Event.counter: ', event.counter);
  console.log('Event.document: ', event.document);
  console.log('Event.electronAPI: ', event.electronAPI);
  console.log('Event.event: ', event.event);
  console.log('Event.handleCounter: ', event.handleCounter);
  console.log('Event.innerText: ', event.innerText);
  console.log('Event.log: ', event.log);
  console.log('Event.newValue: ', event.newValue);
  console.log('Event.oldValue: ', event.oldValue);
  console.log('Event.window: ', event.window);
  console.log('Event.value: ', event.value);
});
