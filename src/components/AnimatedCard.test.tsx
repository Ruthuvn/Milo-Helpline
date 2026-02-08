import { render, screen } from '@testing-library/react';
import AnimatedCard from './AnimatedCard';

test('renders AnimatedCard component', () => {
	render(<AnimatedCard />);
	const element = screen.getByText(/your expected text/i);
	expect(element).toBeInTheDocument();
});