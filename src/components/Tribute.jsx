const Tribute = ({ name, message }) => {
  return (
    <div className='bg-lightBlue p-4 rounded-lg shadow-md text-darkBlue mb-4'>
      <h4 className='text-xl font-semibold'>{name}</h4>
      <p className='mt-2'>{message}</p>
    </div>
  );
};

export default Tribute;
