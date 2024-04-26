import { Box } from '@twilio-paste/box';
import { Select, Option } from '@twilio-paste/select';
import { useDispatch, useSelector } from 'react-redux';
import { taskSlices } from '../store/TaskSlice';

export const SelectHuman = ({ task }) => {
  const dispatch = useDispatch();
  const humans = useSelector((state) => state.humans);

  return (
    <Box marginRight="space40" width="100%">
      <Select
        className="SelectHuman"
        value={task.assignedTo}
        onChange={(event) => {
          dispatch(
            dispatch(
              taskSlices.actions.assignedToUser({
                taskId: task.id,
                userId: event.target.value
              })
            )
          );
        }}
      >
        <Option value="">(Unassigned)</Option>
        {humans.map((human) => (
          <Option value={human.id} key={human.id}>
            {human.name}
          </Option>
        ))}
      </Select>
    </Box>
  );
};
