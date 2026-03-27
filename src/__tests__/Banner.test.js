import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

// This runs before each test. This is good instead of having the component render in each test case
const setup = () => render(<AppBanner />);

// Get user event
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the title in the banner', () => {
	setup();
	expect(screen.getByText(/Hi, Oluwatosin Ayinde/i)).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const downloadCV = screen.getByText(/Download CV/i);

	expect(downloadCV).toBeInTheDocument();

	const downloadCVButton = downloadCV.parentElement.parentElement;

	expect(downloadCVButton).toBeInTheDocument();
	expect(downloadCVButton).toHaveAttribute(
		'href',
		'/files/Oluwatosin%20Ayinde%20Samuel.docx.pdf'
	);
	expect(downloadCVButton).toHaveAttribute(
		'download',
		'Oluwatosin Ayinde Samuel.docx.pdf'
	);

	await user.click(downloadCVButton);
});
