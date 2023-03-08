import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllReversedTrips } from '../redux/reserveSlice';
import ReservationItem from '../components/ReservationItem';
import '../assets/stylesheets/MyReservations.css';

export default function MyReservations() {
  const reservations = useSelector((store) => store.reserveItems.reserved);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReversedTrips());
  }, [dispatch]);

  return (
    <ul className="my-reservations column">
      {reservations.map((reservation, index) => (
        <ReservationItem
          key={reservation.id}
          reservation={reservation}
          delay={`1.${index}`}
        />
      ))}
    </ul>
  );
}
