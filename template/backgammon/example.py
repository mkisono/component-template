import streamlit as st
from backgammon import streamlit_backgammon

entry = {
    'position': [0, -2, 0, 0, 0, 0, 5, 0, 3, 0, 0, 0, -5, 5, 0, 0, 0, -3, 0, -5, 0, 0, 0, 0, 2, 0],
    'cube': 1
}
streamlit_backgammon(entry=entry)
