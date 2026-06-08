window.initTask = function() {
	const taskWrapper1 = document.getElementById('taskWrapper1');
	const taskWrapper2 = document.getElementById('taskWrapper2');
	const taskWrapper3 = document.getElementById('taskWrapper3');
	const taskWrapper4 = document.getElementById('taskWrapper4');

	if (taskWrapper1) {
		new Sortable(taskWrapper1, {
			group: 'shared',
			animation: 150
		});
	}
	if (taskWrapper2) {
		new Sortable(taskWrapper2, {
			group: 'shared',
			animation: 150
		});
	}
	if (taskWrapper3) {
		new Sortable(taskWrapper3, {
			group: 'shared',
			animation: 150
		});
	}
	if (taskWrapper4) {
		new Sortable(taskWrapper4, {
			group: 'shared',
			animation: 150
		});
	}
};

if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => window.initTask());
	} else {
		window.initTask();
	}
}