/* exported channels */

const channelsData = window.localStorage.getItem('channels');

window.onbeforeunload = () => {
    window.localStorage.setItem('channels', JSON.stringify(channels));
};

let channels;
if(channelsData) {
    channels = JSON.parse(channelsData);
}
else {
    channels = [{
        name: 'Main Room',
        video: 'videos/mainroom.MOV',
        count: 0
    }, {
        name: 'Classroom',
        video: 'videos/classroom.MOV',
        count: 0
    }, {
        name: 'Hallway',
        video: 'videos/hallway.MOV',
        count: 0
    }];
}
