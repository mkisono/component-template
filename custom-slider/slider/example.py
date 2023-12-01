import streamlit as st
from slider import slider

value = slider("Player Win %", 50)
st.write(value)

