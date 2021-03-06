import React, { useEffect, useCallback, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
  TextField,
  IconButton,
} from '@material-ui/core';
import { Delete as DeleteIcon, Save as SaveIcon } from '@material-ui/icons';

import { IReduxState } from '../../store/reducers';
import { useShallowEqualSelector } from '../../util/hooks';
import { projectEffects } from '../../store/effects';
import FullScreenLoading from '../../ui/FullScreenLoading';
import { projectActions } from '../../store/action';

import './index.scss';

const projectEditorSelector = ({ project: { editingProject: { current } } }: IReduxState) => ({
  editingProject: current,
});

// const debouncedChangeProjectName = createDebounced(projectEffects.setProjectName)

// 关于项目更名的逻辑，可以单独抽离成一个 ProjectEditorHeader 组件

export default function ProjectEditor() {
  const { id: projectId } = useParams();
  const { editingProject } = useShallowEqualSelector(projectEditorSelector);
  const dispatch = useDispatch();

  const changeEditingProjectName = useCallback((evt: any) => {
    dispatch(projectActions.createSnapshotEditingpProject());
    dispatch(projectActions.createChangeEditingProjectName(evt.target.value));
  }, [dispatch]);

  const saveEdtingProjectName = useCallback(() => {
    dispatch(projectEffects.saveEditingProjectName())
  }, [dispatch]);

  useEffect(() => {
    if (projectId == null) return;
    if (editingProject == null || editingProject.id !== projectId) {
      dispatch(projectActions.createClearEditingHistory());
      dispatch(projectEffects.getEditingProject(projectId));
    } 
  }, [projectId, editingProject, dispatch]);

  const [taskName, setTaskName] = useState('');
  const updateTaskName = useCallback((evt: any) => setTaskName(evt.target.value), [setTaskName]);

  const createTask = useCallback(() => {
    if (taskName.trim() === '' || editingProject == null) return;
    dispatch(projectActions.createSnapshotEditingpProject());
    dispatch(projectEffects.createTask(editingProject.id, taskName));
    setTaskName('');
  }, [taskName, setTaskName, dispatch, editingProject]);

  const handleKeyEnterUp = useCallback(
    (evt: any) => {
      const KEY_ENTER_CODE = 13;
      const { keyCode: keyUp = -1 } = evt;
      if (keyUp === KEY_ENTER_CODE) {
        dispatch(projectActions.createClearEditingProjectFuture());
        createTask();
      }
    },
    [dispatch, createTask],
  );

  const deleteTask = useCallback(
    (taskId: string) => {
      dispatch(projectActions.createSnapshotEditingpProject());
      dispatch(projectEffects.delTask(taskId));
    },
    [dispatch],
  );


  if (projectId == null) return <Redirect to="/" />;

  if (editingProject == null) return <FullScreenLoading />;

  return (
    <div className="project-editor">
      <List>
        <ListItem className="project-editor-input">
          <TextField onChange={changeEditingProjectName} value={editingProject.name} />
          <ListItemIcon>
            <IconButton onClick={saveEdtingProjectName}>
              <SaveIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
        {editingProject.tasks.map(t => (
          <ListItem key={t.id}>
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText>{t.name}</ListItemText>
            <ListItemIcon>
              <IconButton onClick={() => deleteTask(t.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        ))}
        <ListItem>
          <TextField placeholder="任务名称(按回车键添加)" onKeyUp={handleKeyEnterUp} value={taskName} onChange={updateTaskName} type="text" fullWidth />
        </ListItem>
      </List>
    </div>
  );
}
