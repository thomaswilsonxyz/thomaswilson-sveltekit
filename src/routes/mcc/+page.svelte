<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Employee from '../../components/salary-calculator/employee.svelte';

	type Employee = {
		id: string;
		name: string;
		salary: number;
		count: number;
	};

	function makeId(): string {
		return (
			Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		);
	}

	function makeRandomJobTitle(): string {
		const randomJobNames = [
			'Junior Software Engineer',
			'Finance Associate',
			'Growth Marketeer',
			'Customer Support',
			'Data Scientist',
			'Logistics Manager',
			'General Manager',
			'Process Manager',
			'Head of Department'
		];

		const index = Math.floor(Math.random() * randomJobNames.length);
		return randomJobNames[index];
	}

	function makeRandomSalary(): number {
		const b = Math.floor(Math.random() * 10);
		return 5_000 * b;
	}

	function makeEmployee(salaryOverride?: number): Employee {
		return {
			id: makeId(),
			name: makeRandomJobTitle(),
			salary: salaryOverride ?? makeRandomSalary(),
			count: 1
		};
	}

	let INITIAL_SALARY = makeRandomSalary();
	let employees: Employee[] = [makeEmployee(INITIAL_SALARY)];

	let totalCost = 0;

	let averageAnnualSalary = INITIAL_SALARY;
	let salaryCostPerMinute = annualSalaryToPerMinuteCost(INITIAL_SALARY);
	let totalNumberOfEmployees = 2;
	let secondsElapsed = 0;
	let intervalRef;

	let currency: 'GBP' | 'USD' = 'GBP';
	let salaryCalculationMethod: 'average' | 'individual' = 'average';

	function handleEmployeeChange(employeeId: string) {
		return function (event: CustomEvent) {
			employees = employees.map(({ id, ...rest }) => {
				if (id === employeeId) {
					return { ...event.detail, id };
				}

				return { id, ...rest };
			});
			totalNumberOfEmployees = getNumberOfEmployees(employees);
			salaryCostPerMinute = allEmployeesSalaryToPerMinuteCost(employees);
		};
	}

	function handleEmployeeRemove(id: string) {
		return function () {
			employees = employees.filter(({ id: employeeId }) => employeeId !== id);
			totalNumberOfEmployees = getNumberOfEmployees(employees);
			salaryCostPerMinute = allEmployeesSalaryToPerMinuteCost(employees);
		};
	}

	function handleSecondElapsed() {
		secondsElapsed++;
	}

	function resetInterval() {
		intervalRef = setInterval(handleSecondElapsed, 1000);
	}

	function reset() {
		secondsElapsed = 0;
		if (intervalRef) {
			clearInterval(intervalRef);
		} else {
			resetInterval();
		}
	}

	function stop() {
		clearInterval(intervalRef);
	}

	function addEmployee() {
		employees = [...employees, makeEmployee()];
		totalNumberOfEmployees = getNumberOfEmployees(employees);
		salaryCostPerMinute = allEmployeesSalaryToPerMinuteCost(employees);
	}

	function handleAverageMethodChanged(method: 'average' | 'individual') {
		return () => {
			salaryCalculationMethod = method;

			secondsElapsed = 0;
			if (method === 'average') {
				salaryCostPerMinute = annualSalaryToPerMinuteCost(averageAnnualSalary);
			} else if (method === 'individual') {
				salaryCostPerMinute = allEmployeesSalaryToPerMinuteCost(employees);
				totalNumberOfEmployees = getNumberOfEmployees(employees);
			}
		};
	}

	function getNumberOfEmployees(employees: Employee[]): number {
		return employees.reduce((runningCount, employee) => {
			return runningCount + employee.count;
		}, 0);
	}

	function handleAverageAnnualSalaryChange() {
		salaryCostPerMinute = annualSalaryToPerMinuteCost(averageAnnualSalary);
	}

	function annualSalaryToPerMinuteCost(annualSalary: number) {
		const minutesInHour = 60;
		const workingDaysInYear = 48 * 5;
		const hoursInWorkingDay = 8;
		return annualSalary / workingDaysInYear / hoursInWorkingDay / minutesInHour;
	}

	function allEmployeesSalaryToPerMinuteCost(employees: Employee[]) {
		return employees.reduce((acc, employee) => {
			return acc + annualSalaryToPerMinuteCost(employee.salary);
		}, 0);
	}

	function formatCurrency(amount: number, currency: 'GBP' | 'USD') {
		return `${currency === 'GBP' ? '£' : '$'}${amount.toFixed(2)}`;
	}

	function formatSecondsToMinutes(seconds: number) {
		const minutes = Math.floor(seconds / 60);
		const secondsRemaining = seconds % 60;
		return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
	}

	onMount(() => {});

	onDestroy(() => {
		clearInterval(intervalRef);
	});

	$: totalCost = (secondsElapsed / 60) * salaryCostPerMinute * totalNumberOfEmployees;
	$: totalCostPerMinute = (salaryCostPerMinute * totalNumberOfEmployees).toFixed(2);

	// TODO: Milestones in cost, e.g. price of a kit kat chunky, price of X
</script>

<svelte:head>
	<title>Meeting Cost Calculator</title>
	<meta
		name="description"
		content="Calculate the cost of a meeting, or at least the salaries of people attending a meeting."
	/>
	<meta name="twitter:card" content="https://www.thomaswilson.xyz/meeting-cost-calculator.png" />
	<meta name="twitter:site" content="@tjwilson92" />
	<meta name="twitter:title" content="Meeting Cost Calculator" />
	<meta
		name="twitter:description"
		content="Calculate the cost of a meeting, or at least the salaries of people attending a meeting."
	/>
	<meta name="twitter:image" content="https://www.thomaswilson.xyz/meeting-cost-calculator.png" />
	<meta name="twitter:image:alt" content="Meeting Cost Calculator" />

	<meta property="og:title" content="Meeting Cost Calculator" />
	<meta
		property="og:description"
		content="Calculate the cost of a meeting, or at least the salaries of people attending a meeting."
	/>
	<meta property="og:image" content="https://www.thomaswilson.xyz/meeting-cost-calculator.png" />
	<meta property="og:image:alt" content="Meeting Cost Calculator" />
	<meta property="og:url" content="https://www.thomaswilson.xyz/mcc" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Thomas Wilson" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_GB" />
</svelte:head>

<main>
	<section>
		<h1>Meeting Cost Calculator</h1>
		<p class="subtitle">Meetings aren't free. See how much you're paying for them.</p>
	</section>

	<section>
		<h2>Attendee Salaries are</h2>
		<div class="modes">
			<button
				class="modes__button"
				class:selected={salaryCalculationMethod == 'average'}
				on:click={handleAverageMethodChanged('average')}>A simple average</button
			>
			<button
				class="modes__button"
				class:selected={salaryCalculationMethod == 'individual'}
				on:click={() => (salaryCalculationMethod = 'individual')}>In different bands</button
			>
		</div>
	</section>

	<section class="form">
		{#if salaryCalculationMethod == 'average'}
			<h2>Salary Details</h2>
			<form class="simple-average-form">
				<div class="simple-average-form__field">
					<label for="averageSalary">Average Annual Salary of Attendee</label>
					<input
						type="number"
						step="1"
						bind:value={averageAnnualSalary}
						on:input={() => handleAverageAnnualSalaryChange()}
					/>
				</div>

				<div class="simple-average-form__field">
					<label for="totalNumberOfEmployees">Number of Attendees</label>
					<input type="number" step="1" bind:value={totalNumberOfEmployees} />
				</div>
			</form>
		{:else}
			<div class="employees-header">
				<h2>Employee Details</h2>
				<div class="employee-details-container__button">
					<button on:click={addEmployee}>Add Employee</button>
				</div>
			</div>

			<div class="employees-list" role="list">
				{#each employees as employee}
					<Employee
						id={employee.id}
						name={employee.name}
						salary={employee.salary}
						count={employee.count}
						on:change={handleEmployeeChange(employee.id)}
						on:remove={handleEmployeeRemove(employee.id)}
					/>
				{/each}
			</div>
		{/if}
	</section>

	<section class="result">
		<h2>Projected Costs</h2>
		{#if salaryCalculationMethod === 'average'}
			<p>
				With {totalNumberOfEmployees ?? 0}
				{totalNumberOfEmployees === 1 ? 'Attendee' : 'Attendees'}, each costing aprox. {formatCurrency(
					salaryCostPerMinute,
					currency
				)}
				per minute, this meeting will cost £{totalCostPerMinute} per minute.
			</p>
		{:else}
			<p>With the following attendees:</p>
			<ul>
				{#each employees as employee}
					<li>{employee.count} x {employee.name} @ {employee.salary}/year</li>
				{/each}
			</ul>
			<p>This meeting will cost £{totalCostPerMinute}/minute</p>
		{/if}

		<p>This meeting will cost:</p>

		<ul class="duration-list">
			<li class="duration-list__item">
				{formatCurrency(salaryCostPerMinute * totalNumberOfEmployees * 30, currency)} for 30 minutes
			</li>
			<li class="duration-list__item">
				{formatCurrency(salaryCostPerMinute * totalNumberOfEmployees * 45, currency)} for 45 minutes
			</li>
			<li class="duration-list__item">
				{formatCurrency(salaryCostPerMinute * totalNumberOfEmployees * 60, currency)} for 60 minutes
			</li>
		</ul>
	</section>

	<section>
		<h2>Timed Costs</h2>

		<div class="action-buttons">
			<button
				on:click={reset}
				class:start={secondsElapsed === 0}
				class:start__reset={secondsElapsed > 0}
			>
				{#if secondsElapsed === 0}
					Start the Meeting
				{:else}
					Reset
				{/if}
			</button>
			<button on:click={stop} disabled={secondsElapsed === 0} id="pause"
				>{intervalRef ? 'Pause' : 'Start'}</button
			>
		</div>
		<p class="total-cost">
			Total cost so far: {formatCurrency(totalCost, currency)} over {formatSecondsToMinutes(
				secondsElapsed
			)} <br />
		</p>
	</section>

	<section>
		<h2>About</h2>
		<p>
			Made with 🖤 on a tain by <a id="thomas-wilson" href="/">Thomas Wilson</a>
		</p>
	</section>
</main>

<style>
	main {
		display: grid;
		place-content: center;
		grid-auto-rows: max-content;
		padding: 32px 0;
		min-height: 100vh;
		width: 100vw;
		background: var(--gray-100);
	}

	section {
		max-width: 95vw;
		width: 600px;
		height: fit-content;
		padding: 12px 0px;
	}

	.subtitle {
		font-size: 1.5rem;
		color: var(--gray-700);
		font-weight: 400;
		font-family: var(--font-family-sans);
	}

	.modes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4px;
	}

	.modes__button {
		border: 1px solid var(--gray-300);
		border-radius: 4px;
		padding: 8px 16px;
		color: var(--gray-700);
		background: var(--gray-100);
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
	}

	.modes__button.selected {
		background: var(--brand-blue);
		color: white;
	}

	.employees-header {
		display: grid;
		grid-template-columns: 1fr max-content;
		grid-template-rows: 1fr;
	}

	.employees-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 24px;
	}

	.result p {
		font-variant-numeric: tabular-nums;
	}

	.simple-average-form {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 8px;
	}

	.simple-average-form__field {
		display: grid;
		grid-template-columns: 1fr;
	}

	#thomas-wilson {
		color: var(--brand-orange);
	}

	.action-buttons {
		padding: 12px 0px;
		display: grid;
		gap: 6px;
		grid-template-columns: 1fr;
	}

	.action-buttons button {
		padding: var(--spacing-md);
		border-radius: 8px;
		cursor: pointer;
	}

	.start {
		border: 1px solid var(--brand-blue);
		background: var(--brand-blue);
		color: white;
	}

	.start__reset {
		border: none;
		background: none;
		color: var(--gray-700);
		border: 1px solid var(--gray-500);
	}

	#pause {
		color: var(--brand-blue);
		background: white;
		border: 1px solid var(--brand-blue);
		transition: 0.1s ease-in;
	}

	#pause:disabled {
		border: none;
		background: var(--gray-200);
		color: var(--gray-600);
		border: 1px solid var(--gray-200);
		cursor: not-allowed;
	}

	ul {
		list-style: disc;
		padding-left: 24px;
	}

	li {
		padding: 2px 0;
	}

	.total-cost {
		text-align: center;
		font-size: 1.2rem;
		font-weight: 400;
	}
</style>
